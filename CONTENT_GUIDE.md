# Updating Portfolio Content

Portfolio content is stored in TypeScript files under `src/data/`. Edit the data files rather than the section components whenever you want to change text or listed items.

## Personal details and portfolio sections

Edit `src/data/portfolio.ts` for:

- **Personal details:** name, email, role title, hero punchline, supporting line, and location.
- **About:** headline, summary, and highlights.
- **Experience:** company, role, dates, description, highlights, technologies, and location.
- **Projects:** title, description, technologies, links, featured status, image, and build date.
- **Education:** school, degree, field of study, dates, and awards.
- **Social links:** platform, destination URL, and display label.

To add or remove an experience, project, education entry, or social link, add or remove its object in the matching array. Keep each item's `id` unique within its list.

## Skills

Edit `src/data/skills.ts`. Skills are grouped by category; add or remove a name in a category's `skills` list. IDs are generated automatically, so no manual IDs are needed.

## Certificates

Edit `src/data/certificates.ts`. Add or remove certificate objects in the `certificates` array. Each certificate needs a unique `id`, `title`, and `issuer`. Optional fields include:

- `date` and `expirationDate`, using `YYYY-MM` format.
- `credentialUrl`, used by the **View Certificate** button.
- `credentialId`, kept in the data but not displayed on the site.
- `skills`, shown as certificate tags.

If a certificate is an image or document in `public/certificates/`, set its `credentialUrl` to its public URL. This project is deployed under `/portfolio-v2/`, so for example use `/portfolio-v2/certificates/my-certificate.png`. Place the asset in `public/certificates/` and use its filename in the URL.

## Project images and dates

Place project images in `public/projects/` and set `image` to the site's public URL, such as `/portfolio-v2/projects/my-project.png`. Project cards show the year from `date`; use a year or a date beginning with `YYYY` (for example, `2024` or `2024-06-15`). Projects with dates are sorted newest-first after featured projects.

## Verify changes

Run these commands from the repository root after editing:

```sh
npm run build
npm run lint
```

## Deploy

This project is configured for GitHub Pages at `https://yabetsu16.github.io/portfolio-v2/`. The Vite base path is set to `/portfolio-v2/` in `vite.config.ts`.

1. Commit and push your changes to the GitHub repository.
2. From the repository root, run:

   ```sh
   npm run deploy
   ```

   This builds the site and publishes the generated `dist/` folder to the `gh-pages` branch.
3. Open the GitHub repository's **Settings → Pages** and confirm that Pages deploys from the `gh-pages` branch and its root directory. On the first deploy, enable this source if necessary.
4. After publishing completes, visit `https://yabetsu16.github.io/portfolio-v2/` to check the live site.
