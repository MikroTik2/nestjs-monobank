import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

import { Body } from './(app)/layout.client'
import { Provider } from './(app)/provider'
import '@/styles/globals.css'

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

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='uk' suppressHydrationWarning>
			<Body>
				<Provider>{children}</Provider>
			</Body>
		</html>
	)
}
