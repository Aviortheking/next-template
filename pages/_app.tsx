import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import '../styl/index.styl'

export default class CApp extends App {

	public render() {
		const { Component, pageProps } = this.props

		return(
			<>
				<Head>
					<title>Next Template Hello World !</title>
				</Head>
				<Component {...pageProps} />
			</>
		)
	}
}
