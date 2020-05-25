import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import * as Sentry from '@sentry/browser'
import ErrorPage from './_error'

import '@styl/index.styl'

Sentry.init({
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
})

interface States {
	errorId?: string
}

export default class CApp extends App<Record<string, unknown>, Record<string, unknown>, States> {

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log('catching error', error, errorInfo)
		Sentry.withScope((scope) => {
			Object.keys(errorInfo).forEach((key) => {
				scope.setExtra(key, (errorInfo as any)[key])
			})
			const id = Sentry.captureException(error)
			console.log(id)
			this.setState({
				errorId: id
			})
		})

	}

	public render() {
		const { Component, pageProps } = this.props

		return(
			<>
				<Head>
					<title>Next Template Hello World !</title>
				</Head>
				{this.state && this.state.errorId && (
					<ErrorPage statusCode={500} eventId={this.state.errorId} />
				) || (
					<Component {...pageProps} />
				)}
			</>
		)
	}
}
