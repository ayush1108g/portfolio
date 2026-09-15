import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/_next/', '/api/'],
        },
        sitemap: 'https://ayush-gupta-portfolio.netlify.app/sitemap.xml',
    }
}
