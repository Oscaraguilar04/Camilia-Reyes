# Camila Reyes — San Diego Residential Real Estate

Personal-brand website for **Camila Reyes**, a San Diego residential real estate agent and real-estate content creator. A social-first site built to turn an existing social audience into buyer, seller, relocation, and consultation leads.

Live site (GitHub Pages): `https://oscaraguilar04.github.io/Camilia-Reyes/`

> Portfolio concept. Camila Reyes is a fictional real estate professional. Properties, testimonials and social metrics are shown for design demonstration purposes.

## Brand

Social, modern, and personal — deliberately distinct from luxury-editorial or family-focused agent sites.

- Palette: warm beige, cream, espresso, terracotta
- Type: Syne (display) + Plus Jakarta Sans (body), with Caveat reserved for small handwritten annotations
- Hero: portrait plus vertical content frames
- Conversion paths: Start My Home Search, Get My Home Value, Get the San Diego Relocation Guide, Text Camila, Let's Talk
- Mobile: persistent bottom bar with Text Camila and Let's Talk

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

1. Repo Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Save

`.nojekyll` is included so GitHub Pages serves the static files as-is.

## Adapting for a live client

- **Social reach figures:** the three `.proof-num` values and their labels in the `#proof` section of `index.html`.
- **Featured homes:** the `HOMES` array at the top of `script.js`.
- **Neighborhoods and videos:** the `HOODS` and `VIDEOS` arrays in `script.js`.
- **Contact details:** phone, email, and Instagram links in `index.html` (also in the footer and mobile bar).
- **Licensing and brokerage:** add the client's real brokerage and license details to the footer.

No IDX or MLS integration. Featured listings are managed by hand.

## Stack

Semantic HTML, CSS, and vanilla JavaScript. No build step and no dependencies.
