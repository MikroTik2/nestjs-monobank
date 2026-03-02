import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/*?', '/*.html', '*?*=*', '*?*=*&*=*', '*?*=*=*']
		},
		host: 'https://nestjs-monobank.vercel.app'
	}
}
