import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as Sentry from '@sentry/browser'

process.on('unhandledRejection', (err) => {
	Sentry.captureException(err)
})

process.on('uncaughtException', (err) => {
	Sentry.captureException(err)
})

export default class CDocument extends Document {
	public render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
