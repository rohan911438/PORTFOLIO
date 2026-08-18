// Prefixes a root-relative public asset path with Vite's configured base
// (e.g. "/PORTFOLIO/") so images/resumes resolve correctly on GitHub Pages.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
