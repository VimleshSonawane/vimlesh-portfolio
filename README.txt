# Portfolio performance update

This bundle contains an optimized `index.html` plus 62 WebP image assets.

## Deploy
1. Back up the current root `index.html` in your repository.
2. Replace the repository root `index.html` with this bundle's `index.html`.
3. Upload the `assets/portfolio/` folder to the repository root, keeping the exact folder path.
4. Commit and deploy as usual.

No project descriptions, case-study data, URLs, category names, visual theme, or project ordering were intentionally changed.

## Performance changes
- Moved all 62 embedded photo/logo assets into individual optimized WebP files. The hero portrait remains a normal eager image; the portfolio/gallery images use the page's existing lazy-loading behavior.
- Removed the unused legacy project carousel that was populating a second, hidden copy of the project cards and auto-advancing those hidden galleries.
- Replaced the full-screen particle canvas loop with a lower-density, 25 fps loop that pauses when the browser tab is hidden.
- Removed the cursor-ring's perpetual requestAnimationFrame loop and made its position event-driven.
- Paused project-card illustration animations until hover/focus, and added content-visibility to offscreen project groups.
- Made full case-study gallery images decode asynchronously and load later slides lazily.

## Size comparison
- Original uploaded HTML: 6.41 MiB
- Optimized HTML: 0.31 MiB
- Original embedded image payloads: 4.15 MiB
- Optimized WebP image assets: 2.48 MiB

The exact result depends on browser, cache state, hosting and device. This bundle has been checked for required asset references and JavaScript syntax; it has not yet been measured with a real browser performance trace on your MacBook.
