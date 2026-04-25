# RVizSplat — project page

The ROSCon project page for **RVizSplat**: real-time 3D Gaussian Splatting in RViz 2.

Pure static site — no build step.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create an empty GitHub repo (e.g. `rvizsplat-website`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<your-org>/rvizsplat-website.git
   git push -u origin main
   ```
3. In the repo settings → **Pages** → set *Source* to `main` and *Folder* to `/ (root)`.
4. The site will appear at `https://<your-org>.github.io/rvizsplat-website/`.

To use a custom domain or the org's root site (`<your-org>.github.io`), follow GitHub's standard Pages docs.

## Drop in your videos

Place MP4 files at these paths and they auto-load:

```
assets/videos/teaser.mp4          # main hero teaser
assets/videos/result-bonsai.mp4   # results grid, slot 1
assets/videos/result-garden.mp4   # results grid, slot 2
assets/videos/result-live.mp4     # results grid, slot 3
assets/videos/result-markers.mp4  # results grid, slot 4
```

If a video file is absent the slot shows a styled placeholder; no broken UI.

## What to fill in

Open `index.html` and search for `TODO:` — there are five spots:

- ROSCon year (currently `2026`)
- Three author names + their two affiliations
- BibTeX author list

Anything else (titles, abstract, install commands, perf table) is wired to the actual repo and only needs to change if you reshape the project.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page, single file |
| `style.css` | All styling |
| `script.js` | Copy-to-clipboard, video placeholder fallback, smooth scroll |
| `assets/images/hero.png` | Hero banner image |
| `assets/images/rviz-icon.png` | RViz Display icon — favicon, nav, footer |
| `assets/videos/` | Drop MP4s here |
| `.nojekyll` | Stops Pages from running Jekyll (keeps underscored paths working) |
