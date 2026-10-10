---
title: How to add a post (template, not published)
description: One sentence that sums up the post. It shows in the list and in link previews.
linkedin: https://www.linkedin.com/posts/your-post-link
---

Files in `_drafts/` are never published. To publish a post:

1. Copy this file into `_posts/` and name it `YYYY-MM-DD-short-title.md`,
   for example `_posts/2026-10-08-an-ai-agent-is-a-reasoning-loop.md`.
2. Change the `title`, `description` and `linkedin` lines above
   (delete the `linkedin` line if the post was not on LinkedIn).
3. Replace this text with the post. Plain text from LinkedIn works as is.
   Blank lines make new paragraphs, and lines starting with `- ` become a list.
4. Commit and push. The post appears on /writing/ within a minute or two.
