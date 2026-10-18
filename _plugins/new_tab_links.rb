# Opens email links and links to other websites in a new tab, so a visitor never
# leaves this site by clicking one. Runs after each HTML page is rendered, so it
# covers buttons, the footer and plain Markdown links in posts alike, including
# links added later. A link that already has a target is left alone; rel gets
# "noopener" added, keeping any value already there (such as rel="me").
module NewTabLinks
  OWN_HOSTS = %w[https://mjesar.github.io http://localhost http://127.0.0.1].freeze

  def self.leaves_site?(href)
    return true if href.start_with?("mailto:")
    href.match?(%r{\Ahttps?://}) && OWN_HOSTS.none? { |own| href.start_with?(own) }
  end

  def self.process(html)
    html.gsub(/<a\b[^>]*>/) do |tag|
      href = tag[/\shref="([^"]*)"/, 1]
      next tag if href.nil? || tag.match?(/\starget=/) || !leaves_site?(href)

      tag = if tag.match?(/\srel="/)
              tag.sub(/\srel="([^"]*)"/) do
                values = Regexp.last_match(1).split
                %( rel="#{(values | ["noopener"]).join(" ")}")
              end
            else
              tag.sub(/<a\b/, '<a rel="noopener"')
            end
      tag.sub(/<a\b/, '<a target="_blank"')
    end
  end
end

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  doc.output = NewTabLinks.process(doc.output) if doc.output_ext == ".html"
end
