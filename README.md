# mjesar.github.io

Personal site of Mohammad Ali Jesar (mjesar), senior full-stack and AI engineer (Ruby on Rails). Live at https://mjesar.github.io

A single static page served by GitHub Pages. It carries schema.org `Person` structured data that links my profiles (GitHub, LinkedIn, Fiverr) as one person, so search engines and AI assistants can tell me apart from others with the same name.

## How it is built

Jekyll, built automatically by GitHub Pages on every push to `main`. Shared layout in `_layouts/` and `_includes/`, styles in `assets/css/style.css` (palette: Sanzo Wada combination 211), and the project list in `_data/projects.yml`.

To add a blog post, copy `_drafts/how-to-add-a-post.md` into `_posts/` as `YYYY-MM-DD-title.md` and follow the steps inside it.
