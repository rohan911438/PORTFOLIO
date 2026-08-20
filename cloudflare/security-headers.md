# Security headers via Cloudflare (in front of GitHub Pages)

GitHub Pages can't send custom HTTP headers. These are added at the Cloudflare
layer instead, once the domain is proxied through Cloudflare (orange cloud).

## Option A — Transform Rules (no code, do this first)

Dashboard → your zone → **Rules → Transform Rules → Modify Response Header** →
Create rule → match **All incoming requests** → add each header below as
"Set static":

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://formspree.io; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; frame-ancestors 'none'; upgrade-insecure-requests` |

This CSP is the same policy already in `index.html`'s `<meta>` tag, plus
`frame-ancestors 'none'` — the clickjacking directive that only works as a
real header. Having it in both places is fine (harmless overlap).

If the free plan's Transform Rules ever stop covering this, fall back to
Option B.

## Option B — Worker (fallback if Transform Rules isn't available)

`security-headers-worker.js` in this folder is a drop-in Worker that fetches
from the existing origin (GitHub Pages) unchanged and just adds the same
headers to the response. To use it:

1. Dashboard → **Workers & Pages → Create → Worker**, paste the script
2. **Deploy**, then attach a route: `rohann.xyz/*` and `www.rohann.xyz/*`
3. Delete/disable the Transform Rule from Option A if both are active, to
   avoid setting the same header twice

## Verifying

After either option is live:

```
curl -sD - https://rohann.xyz/ -o /dev/null
```

should show `strict-transport-security`, `x-frame-options`,
`x-content-type-options`, `permissions-policy`, and `content-security-policy`
in the response.
