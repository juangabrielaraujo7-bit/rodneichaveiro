import type { NextConfig } from 'next';
import {canIndex} from './src/lib/publishing.mjs';
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ...(!canIndex() ? [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }] : []),
    ]}];
  },
  async redirects() {
    return [{source:'/home',destination:'/',permanent:true},{source:'/servicos',destination:'/#servicos',permanent:true}];
  }
};
export default nextConfig;
