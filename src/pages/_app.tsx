import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import { NotificationManager, Navbar, Loader, Footer } from '@dzeio/components'

// import '../styl/globals.styl'
import '@dzeio/components/style.css'

export default class CustomApp extends App<unknown, unknown, {path?: string}> {

	public componentDidMount(): void {
		this.checkMessage()
		this.setState({ path: Router.asPath })
		Router.events.on('routeChangeComplete', () => {
			this.checkMessage()
			this.setState({ path: Router.asPath })
		})
	}

	public render(): JSX.Element {
		const { Component, pageProps } = this.props

		return (
			<>
				<DefaultSeo
					titleTemplate="%s - Sitename"
					title="Sitemap"
					description="Site description"
				/>
				<Navbar
					type="navbar"
					items={[]}
				/>
				<Loader auto={{ increment: [1, 10], interval: [5, 50] }} />
				<Component {...pageProps} />
				<NotificationManager manageRoutes />
				<Footer />
			</>
		)
	}

	private checkMessage() {
		const msg = Router.query.message
		if (typeof msg === 'string') {
			NotificationManager.addNotification(msg)
		}
	}

}
