import React from 'react'

interface Props {
	children: React.ReactNode
}

export default class HelloWorld extends React.Component<Props> {

	public render() {
		return (
			<>
				<h1>{this.props.children}</h1>
				<style jsx>{`
					h1
						font-weight 700
				`}</style>
			</>
		)
	}
}
