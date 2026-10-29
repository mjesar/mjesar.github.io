# Gives every heading an id, so any section can be linked to directly (for example
# /#experience-and-education) and answer engines can cite a section, not just a page.
# Markdown headings already get ids from kramdown; this covers the headings written
# in HTML (layouts, includes, index.html, resume) and any added later. Runs after
# each HTML page is rendered. A heading that already has an id is left alone, and an
# id already used on the page gets -1, -2 and so on added, the same way kramdown does.
module HeadingIds
  def self.slug(text)
    text.gsub(/<[^>]*>/, "")
        .gsub(/&[a-z#0-9]+;/i, " ")
        .downcase
        .gsub(/[^a-z0-9\s_-]/, "")
        .strip
        .gsub(/\s+/, "-")
  end

  def self.process(html)
    used = html.scan(/\sid="([^"]*)"/).flatten.to_set
    html.gsub(%r{<(h[1-4])\b([^>]*)>(.*?)</\1>}m) do |heading|
      tag, attrs, inner = Regexp.last_match.captures
      base = slug(inner)
      next heading if attrs.match?(/\sid=/) || base.empty?

      id = base
      n = 0
      id = "#{base}-#{n += 1}" while used.include?(id)
      used << id
      %(<#{tag} id="#{id}"#{attrs}>#{inner}</#{tag}>)
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  doc.output = HeadingIds.process(doc.output) if doc.output_ext == ".html"
end
