# mjesar.github.io

Personal site of Mohammad Ali Jesar (mjesar), software engineer for Ruby on Rails, AI and automation. Live at https://mjesar.github.io

A single static page served by GitHub Pages. It carries schema.org `Person` structured data that links my profiles (GitHub, LinkedIn, Fiverr) as one person, so search engines and AI assistants can tell me apart from others with the same name.

## How it is built

Jekyll, built automatically by GitHub Pages on every push to `main`. Shared layout in `_layouts/` and `_includes/`, styles in `assets/css/style.css` (palette: Sanzo Wada combination 211), and the project list in `_data/projects.yml`.

To add a blog post, copy `_drafts/how-to-add-a-post.md` into `_posts/` as `YYYY-MM-DD-title.md` and follow the steps inside it.

## The footer llama

Every page has a small pixel llama walking along the patchwork band above the footer. It nods to the Andean wool mood the site design started from. It grazes on the band (the bites grow back), blinks, naps, and turns to look when the mouse comes close. It is shy the first time you pet it and runs away; after that each pet gets a different reaction (a hop with a heart, a spit, sitting down, running off).

It is plain JavaScript with no libraries (`assets/js/llama.js`): the frames are small text grids drawn as SVG, and the coat colours come from CSS so it fits both light and dark mode. It is a real button, so it can be petted with the keyboard. It only moves while it is on screen, stands still for visitors who prefer reduced motion, and is hidden when printing.
