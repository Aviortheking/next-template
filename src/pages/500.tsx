import React from 'react'
import Error from './_error'

export default class E500 extends React.Component {

	public render() {
		return(
			<Error statusCode={500} />
		)
	}
}
