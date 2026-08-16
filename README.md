# Majdoor Hajiri Website

Static, bilingual (English + Hindi) product website for **Majdoor Hajiri** by CodeMicros.

## What is included

- `index.html` — English/Hinglish landing page
- `hi.html` — Hindi landing page
- `labour-attendance-app.html` — SEO guide for labour attendance searches
- `mazdoor-hajiri-app.html` — Hindi/Hinglish SEO guide
- `privacy-policy.html` — website privacy policy foundation
- `terms.html` — website terms
- `contact.html` — static contact/publisher page
- `404.html` — GitHub Pages-friendly not-found page
- `robots.txt` and `sitemap.xml`
- `manifest.webmanifest` + favicon/app icons
- `CNAME` — prepared for `majdoorhajiri.codemicros.com`
- `ads.txt.example` — safe placeholder instructions for future AdSense
- `reference/approved-design.png` — the approved second design used as the visual reference
- Original Majdoor Hajiri icon and original app screenshots from the ZIP
- Supporting feature/role artwork from the approved design, extracted as local assets so there are no missing remote images

## Brand colors taken from the supplied app assets

- Labour yellow: `#FDC535`
- Main navy: `#022159`
- Dark navy: `#001844`

These values were sampled from the actual supplied app banner/screens rather than chosen independently.

## Run locally

No build step and no npm packages are required.

Option 1: double-click `index.html`.

Option 2 (recommended): open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Before publishing: 3 things to update

### 1. App Store links

Open:

`assets/js/config.js`

Add the final URLs after the apps are published:

```js
playStoreUrl: "https://play.google.com/store/apps/details?id=YOUR_PACKAGE",
appStoreUrl: "https://apps.apple.com/app/idYOUR_APP_ID",
```

Until those URLs are added, the store badges stay visible at full quality but do not navigate to an unpublished listing.

### 2. Support email

The website uses `codemicros@gmail.com` for support. The legal pages also link to `codemicros.com` as the publisher website.

### 3. Confirm the subdomain

The package assumes:

`majdoorhajiri.codemicros.com`

If you prefer a different subdomain, update:

- `CNAME`
- canonical URLs in HTML `<head>` sections
- `sitemap.xml`
- `robots.txt`

## Publish to GitHub Pages

1. Create a new GitHub repository (for example `majdoor-hajiri-website`).
2. Upload the **contents of this folder** to the repository root.
3. In the repository, open **Settings → Pages**.
4. Choose the branch/folder that contains `index.html` (commonly the `main` branch and `/root`).
5. Set the custom domain to `majdoorhajiri.codemicros.com`.
6. Wait for GitHub's DNS check and then enable **Enforce HTTPS** once available.

Official GitHub documentation:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## GoDaddy DNS for the subdomain

Because the root `codemicros.com` is already used by Blogger, you do **not** need to replace the root-domain Blogger records for this project.

For the new GitHub Pages subdomain, create a CNAME record in the DNS zone:

- **Type:** CNAME
- **Name / Host:** `majdoorhajiri`
- **Value / Points to:** `YOUR-GITHUB-USERNAME.github.io`
- **TTL:** GoDaddy default is fine

Important: for GitHub Pages custom subdomains, GitHub recommends pointing the CNAME to the GitHub Pages default domain (`<user>.github.io` or `<organization>.github.io`), not to the repository path.

Official references:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://www.godaddy.com/en-in/help/add-a-subdomain-4080

## SEO included

The site includes:

- Unique title and meta descriptions
- Natural English, Hindi and Hinglish content
- Useful construction content covering Majdoor Hajiri, Mazdoor Hajiri, labour attendance, civil engineer/site engineer workflows, contractor/thekedar, builder, supervisor/foreman, mason/raj mistri, carpenter, fabricator/welder, helper/general labour, daily wage workers, monthly workers, advances, payments and मजदूरी हिसाब
- `SoftwareApplication` structured data
- FAQ structured data on the main English page
- `hreflang` for English and Hindi home pages
- Canonical URLs
- Search-engine crawl rules
- XML sitemap
- Image alt text
- Fast static pages with no framework or API dependency
- Internal SEO guide pages instead of hidden keyword stuffing

No website can guarantee the #1 Google result. Ranking will also depend on indexing, search competition, backlinks, app-store authority, useful content, domain history and ongoing updates.

## Future AdSense / Google Ads readiness

No ad script is active now.

The layout intentionally keeps useful content sections and clean spacing where future ads can be added without covering navigation or download buttons. A hidden insertion point is present before the final CTA.

When AdSense is approved:

1. Update `privacy-policy.html` for the exact analytics/advertising/cookie behavior.
2. Add the official AdSense script supplied in your account.
3. Add your actual ad units only in content-safe positions.
4. Publish the exact `ads.txt` line Google provides. `ads.txt.example` is only a reminder and must not be used as-is.
5. Add any consent solution required for the countries in which you serve ads.

## Images

The production pages use local files only. There are no external image dependencies.

- The app icon is the supplied `app_icon.png`.
- The phone screens are the supplied original app screenshots.
- The yellow/navy palette is based on the supplied app artwork.
- Small feature and audience illustrations match the approved design reference and are stored in `assets/img/icons/` and `assets/img/design/`.

## Static-site note

There is no database, API, login, server form or backend dependency in this website package. It can be hosted directly on GitHub Pages.


## Related CodeMicros construction app

The landing pages and guides include a related-product section for **Civil All in One Calculator**:

- Google Play: https://play.google.com/store/apps/details?id=com.codemicros.civil
- Website: https://civil.codemicros.com

## Recommended subdomain

Use **`majdoorhajiri.codemicros.com`**. It exactly matches the app brand, is already set in `CNAME`, canonical URLs, sitemap and robots configuration, and keeps this app clearly separated from the main CodeMicros/Blogger website.
