import React from 'react'

import { NextPageContext } from 'next'

import { NextSeo } from 'next-seo'
import { Col, Text, Row, Box } from '@dzeio/components'

interface Props {
	statusCode: number
}

export default class Error extends React.Component<Props> {

	public static async getInitialProps({res, err}: NextPageContext): Promise<Props> {
		return {
			statusCode: res?.statusCode ?? err?.statusCode ?? 500
		}
	}

	public render() {
		return (
			<>
				<NextSeo title={`Error ${this.props.statusCode}`} />
				<Row>
					<Col size={3}></Col>
					<Col size={6} tabletSize={8}>
						<Box title={`${this.props.statusCode} Error`}>
							<Text>It seems the page you were going does not exist !</Text>
						</Box>
					</Col>
					<Col size={3}></Col>
				</Row>
			</>
		)
	}
}
