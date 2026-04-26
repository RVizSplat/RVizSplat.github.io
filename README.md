# RVizSplat — project page

The ROSCon&nbsp;2026 project page for **RVizSplat**: real-time 3D Gaussian Splatting in RViz&nbsp;2.

Plugin repo: https://github.com/RVizSplat/RVizSplat

Contributors: Videh Patel, Suchetan Saravanan, Akash Chikhalikar, Aditya Mathur

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

The site is currently published from `main` at the repo root via GitHub Pages.
Push and Pages rebuilds automatically:

```bash
git add -A && git commit -m "..."
git push
```

## Drop in your videos / screenshots

| Path | Used as |
|---|---|
| `assets/videos/teaser.mp4` | Demo video on the page |
| `assets/images/shots/*.png` | Reserved for figures (currently unused inline; see `index.html`) |

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page, single file |
| `style.css` | All styling |
| `script.js` | Copy-to-clipboard, video fallback, smooth scroll |
| `assets/images/hero.png` | Hero illustration |
| `assets/images/rviz-icon.png` | Favicon, nav, footer |
| `assets/videos/teaser.mp4` | Live screen-capture of the plugin |
