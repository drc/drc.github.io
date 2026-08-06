---
name: music-review
description: >-
  Interview-driven music review for this Hugo site. Run when the user wants to
  write a review of a song, album, or playlist. Fetches real metadata from the
  Spotify CLI, then interviews the user through a fixed arc, then writes and
  commits the post. Invoke as /skill:music-review.
---

# Music Review

Write a review of a song, album, or playlist for `drc.github.io`. The *take* is
100% the user's — you structure it, never invent it. The *metadata* comes from
the real Spotify CLI, never from your memory.

## Where content lives

- Posts live at `content/posts/YYYY/<slug>.md` (year subdirectory).
- Site builds on push to `main` (GitHub Actions → Pages at `dancigrang.dev`).
  Committing = publishing. Direct-to-main is intentional and approved.

## Steps

### 1. Get the subject
Ask what they want to review: a **song**, **album**, or **playlist**, and the
artist + title (or a search string). Accept it as an argument on invocation if
given.

### 2. Pull real metadata (Spotify CLI)
The `spotify` CLI is installed (`/usr/local/bin/spotify`) and working, and
`jq` is available for extracting fields from its JSON output. Use both for
facts. Prefer the album or track the user names; if it's a playlist, get the
playlist's tracks.

```bash
spotify search --limit 3 "<artist> <title>"          # find it first
spotify album tracks --id <album_id>                 # tracklist (also shows artists/years)
spotify track features --id <track_id>               # audio features: energy, valence, tempo, danceability, key, mode
spotify track --id <track_id>                        # release date, popularity, explicit
```

Pipe through `jq` to pull only the fields you need, e.g.:

```bash
spotify search --limit 5 "<artist> <title>" | jq -r '.tracks.items[] | "\(.artists[0].name) — \(.name) [\(.album.name)] [\(.id)]"'
spotify track --id <track_id> | jq -r '.album.release_date, .popularity, .is_explicit'
spotify track features --id <track_id> | jq -r '{energy, valence, tempo, key, mode, danceability}'
```

Gather: exact artist name & spelling, album title, release year, tracklist,
album/track cover image, Spotify URL, and (from `track features`) audio
features you can reference in the review. Album cover: save the image URL for
the frontmatter `cover` field, and if a cover image is available consider
downloading it into `static/images/` and referencing `/images/...` in the post.

### 3. Lyrics (optional)
Try Genius / lyrics only if actually set up. As of writing, the Genius CLI is
**not installed** — do not fake lyrics or quote lines you can't verify. If
lyrics tooling is absent, skip it and rely on the user's memory of the words,
or have them quote lines themselves. Never invent a lyric.

### 4. Interview the user (fixed arc)
The take is theirs; your job is to dig it out. Walk this arc one beat at a time,
one focused question each, capturing their words:

1. **First reaction.** What hit them on first listen — or the context of *where*
   they first heard it. (For a playlist: the mood/flow of it as a whole.)
2. **What it does sonically.** The sound, production, arrangement, hooks, vocals —
   lean on the real audio features where relevant (energy, tempo, key).
3. **What it makes them feel / recall.** Emotion, memory, association. The
   personal layer — this is where a review stops being a spec sheet.
4. **What works, what doesn't.** Their honest hits and misses. They should not
   love everything; dig for a real opinion, not a rave or a pan.
5. **Verdict + rating.** Overall take and a rating (your frontmatter/level of
   granularity: e.g. 1–5, halves allowed, or a stars field).
6. **Context.** Where it sits in the artist's catalog or the wider scene; why it
   matters (or doesn't) to them.

Grill: push past one-word answers, ask "why" until it's a real thought. But the
words must be theirs — you restructure, you don't supply opinions they didn't
give.

### 5. Write the post
Draft in the user's voice, first-person, plain-spoken (match the tone of the
existing site). Follow the six beats as natural sections. Include the artist,
album, year, and a "listen" link near the top. Use the metadata you fetched so
the facts are exact.

Filename: kebab-case slug from the artist + title.

Frontmatter — deliberately rich so the user can later build a rendering
template on it. Every field must be a real value you pulled from Spotify or
from the user's answers; leave absent (don't invent) anything you couldn't get.

```yaml
---
title: "\"<Album>\" — <Artist> (Review)"
date: <now, ISO 8601 with -05:00 offset>
draft: false
categories:
    - Music
tags:
    - <2-4 relevant tags: genre, mood, etc.>
type: song | album | playlist
artist: "<exact artist name>"
album: "<album title, if applicable>"
year: <release year>
rating: <user's rating, e.g. 4.5>
genre:
    - <genre(s)>
cover: <cover image URL or /images/... path>
spotify_url: <open.spotify.com link>
tracks:
    - "<track 1>"
    - "<track 2>"
audio_features:
    energy: <0-1>
    valence: <0-1>
    tempo: <bpm>
    key: <key>
    mode: <major|minor>
---
```

### 6. Commit to main
Confirm once before pushing (it goes live), then:

```bash
git add content/posts/YYYY/<slug>.md   # plus any cover image under static/images/
git commit -m "review: <slug>"
git push origin main
```

## Notes
- Never invent: lyrics, release dates, tracklists, ratings the user didn't
  give, opinions the user didn't express. When a fact is missing, ask the user
  or pull it from Spotify — don't guess.
- If Spotify search returns the wrong match, confirm the right one with the
  user before committing their name to a post.
- Ponytail: no boilerplate beyond the frontmatter above.
