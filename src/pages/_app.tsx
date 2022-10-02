import React from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import { NotificationManager, Navbar, Loader, Footer } from '@dzeio/components'

// import '../globals.styl'
import '@dzeio/components/style.css'

export default class CustomApp extends App {

	public render(): JSX.Element {
		const { Component, pageProps } = this.props

		return (
			<>
				<DefaultSeo
					titleTemplate="%s - Sitename"
					title="Sitemap"
					description="Site description"
				/>
				<Navbar menu={[{name: 'Hello'}, {name: 'World'}]} />
				<Loader auto={{ increment: [1, 10], interval: [5, 50] }} />
				<Component {...pageProps} />
				<NotificationManager manageRoutes />
				<Footer />
			</>
		)
	}
}
