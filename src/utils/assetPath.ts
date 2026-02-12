/**
 * Resolves a public asset path using Vite's BASE_URL.
 * Ensures images and other public assets load correctly
 * on both localhost and GitHub Pages.
 */
export function asset(path: string): string {
    const base = import.meta.env.BASE_URL;
    // Strip leading slash from path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
}
