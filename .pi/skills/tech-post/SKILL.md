---
name: tech-post
description: >-
  Interview-driven tech blog post for this Hugo site. Run when the user wants
  to turn a project they're working on into a readable article. You point it at
  a project, it reads the real code, interviews you, then writes and commits
  the post. Invoke as /skill:tech-post.
---

# Tech Post

Turn a project the user is working on into a real blog post for `drc.github.io`.
This is a **hybrid**: you ground the facts in the user's actual code/data, then
interview them to extract the human layer so the article reads like *them*, not
a template.

## Where content lives

- Posts live at `content/posts/YYYY/<slug>.md` (year subdirectory, matching the
  existing `content/posts/2022/` layout).
- Existing post for style reference: `content/posts/2022/setting-up-mid-server-docker.md`.
- Site builds on push to `main` (GitHub Actions → Pages at `dancigrang.dev`).
  Committing = publishing. That is intentional; user approved direct-to-main.

## Steps

### 1. Get the subject
Ask the user which project to write about and the path to it (or accept it as
an argument on invocation). Confirm it's on disk and readable. If they can't
point at real files, warn them the piece will be thinner and rely on the
interview.

### 2. Ground yourself in the code
Before interviewing, actually read the project. Skim:
- README / docs — stated purpose
- entry points, config, and the important files (not every file — the ones that
  matter)
- git log / recent commits if useful — what was just done, what the arc is

Take notes on: what it is, the real decisions, anything hacky or notable, any
recent change. This is the *source of truth you draw facts from*; never assert
a technical claim the user didn't confirm against the code.

### 3. Interview the user (fixed arc)
Walk the user through this spine, one beat at a time. Ask one focused question
per beat, listen, capture their answer (paraphrase level detail is fine), then
move on. Don't dump all six beats at once — that's a questionnaire, not an
interview.

1. **What is this thing?** One or two plain sentences about what it actually is
   and does, the way *they'd* say it to a colleague.
2. **Why did they build it / what problem?** The itch. The concrete problem or
   gap that motivated it. Real-world framing, not just "it's cool."
3. **The actual meat + key decisions.** The interesting technical parts — and
   crucially *why* each choice was made and what alternatives exist. Frame it
   for an interested reader, not necessarily a specialist; they want meat that
   is not *only* jargon.
4. **What went wrong?** Friction, wrong turns, bugs that bit, misconceptions.
   This is often the most genuinely useful part of a post. Dig for it.
5. **What they'd do differently.** Hindsight — what would change on round two.
6. **Where it's headed.** Next steps, plans, open questions.

Keep prompting for the "why" behind answers — a grilling: push past the surface
answer on each beat until you have a real thought, not a default.

### 4. Write the post
Draft it in the user's voice (warm, plain-spoken, first-person — match the tone
of the existing docker post), second-person where natural. Weave in the code
facts you gathered with the interview material. Structure it to follow the six
beats as sections — they read as a natural article arc. Use markdown; fenced
code blocks for anything technical; embed images as `/images/...` paths if the
user points you at screenshots to add.

Filename: kebab-case slug from the title.

### 5. Scaffold the file with Hugo
Create the file with Hugo so the archetype supplies the skeleton (and the
correct `date` + `-05:00` offset automatically):

```bash
hugo new --kind tech-post content/posts/YYYY/<slug>.md
```

This uses `archetypes/tech-post.md` and auto-creates the year subdir. Then fill
in the file's frontmatter (replace every placeholder with the real value) and
write the post body below the frontmatter.

Frontmatter:

```yaml
---
title: "..."
date: <now, ISO 8601 with -05:00 offset, matching existing posts>
draft: true
categories:
    - Development
tags:
    - <2-4 relevant tags>
project: "<name of the project>"
repo: "<optional: local path or URL>"
---
```

### 6. Commit to the repo (draft stays hidden)
Posts go to `main` with `draft: true` by default — committed to the repo but
**stay offline** (the build uses plain `hugo --minify`, which skips drafts). To
publish later, flip `draft: true` → `draft: false` and push again. Preview a
draft locally with `hugo server -D`. Confirm once before pushing (it touches
your repo):

```bash
git add content/posts/YYYY/<slug>.md
git commit -m "post: <slug>"
git push origin main
```

## Notes
- If the user can't point at real code, the piece survives on the interview
  alone — flag that it'll be lighter on specifics.
- Don't fabricate facts. Every technical claim traces to the code or an answer
  they gave. When unsure, ask rather than invent.
- Ponytail: no templates, no boilerplate beyond the frontmatter above.
