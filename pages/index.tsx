import React from 'react'
import '../styl/index.styl'

export default class Index extends React.Component {

	public render() {
		return(
			<>
				<h1>Hello World !</h1>
				<style jsx>{`
					h1
						font-size: 39px
				`}</style>
			</>
		)
	}
}
