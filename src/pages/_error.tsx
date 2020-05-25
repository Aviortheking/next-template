import React from 'react'

import { NextPageContext } from 'next'
import * as Sentry from '@sentry/browser'

interface Props {
	statusCode: number
	eventId?: string
}

export default class Error extends React.Component<Props> {

	public static async getInitialProps({res, err}: NextPageContext): Promise<Props> {
		const statusCode = res?.statusCode || err?.statusCode || 500
		return {
			statusCode
		}

	}

	public render() {
		return(
			<>
				<h1>An Error Occured ! {this.props.statusCode}</h1>
				{this.props.eventId && (
					<button onClick={() => Sentry.showReportDialog({ eventId: this.props.eventId })}>Report Error</button>
				)}
			</>
		)
	}
}
