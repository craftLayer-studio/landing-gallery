import type {MetadataRoute} from 'next';
import {pages} from '@/lib/pages';
import {SITE_URL} from '@/lib/paths';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 0.6},
    ...pages.map(p => ({url: `${SITE_URL}${p.href}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.5})),
  ];
}
