# Vercel Static Site Deployment

This site is ready to deploy on Vercel's Hobby plan as a static site.

## Deployment Steps

1. Push this repository to GitHub (if not already).
2. Go to https://vercel.com/import and import your repository.
3. Vercel will auto-detect the static site and deploy it.

### Notes
- No server-side code is present; all content is static (HTML, CSS, JS, images).
- The `vercel.json` file ensures correct static routing and SPA fallback.
- All assets in the root and `Images/` folders will be served as-is.

## Custom Domains
You can add a custom domain in the Vercel dashboard after deployment.

---

For more details, see the [Vercel documentation](https://vercel.com/docs/deploy-static-sites).
