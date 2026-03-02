import { RootProvider } from 'fumadocs-ui/provider/next'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import './global.css'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'NestJS Monobank',
	description:
		'Інтеграція з Monobank API на основі NestJS: створення рахунків, обробка платежів, вебхуки та багато іншого.'
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
		{ media: '(prefers-color-scheme: light)', color: '#fff' }
	]
}

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='uk' className={inter.className} suppressHydrationWarning>
			<body className='flex flex-col min-h-screen'>
				<RootProvider
					i18n={{
						locale: 'uk',
						translations: {
							search: 'Пошук',
							searchNoResult: 'Нічого не знайдено',
							toc: 'На цій сторінці'
						}
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	)
}
