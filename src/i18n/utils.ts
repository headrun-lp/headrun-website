import type { Lang } from './ui';

/** Path for `path` (always written in its English form, e.g. '/events') in `lang`. */
export function href(lang: Lang, path: string): string {
  const p = lang === 'en' ? path : path === '/' ? '/el' : `/el${path}`;
  return p.endsWith('/') ? p : `${p}/`;
}

/** The English form of a pathname, so the language switch can point at the other locale. */
export function basePath(pathname: string): string {
  const p = pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (p === '/el') return '/';
  return p.startsWith('/el/') ? p.slice(3) : p;
}
