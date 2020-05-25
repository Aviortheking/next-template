import React from 'react'
import HelloWorld from '@cp/HelloWorld'
import Image from '@cp/Image'

function isWindow() {
	try {
		window.isNaN(1)
		return true
	} catch {
		return false
	}
}

export default class Index extends React.Component {

	public render() {
		if (isWindow()) {
			throw new Error('Test')
		}

		return(
			<>
				<HelloWorld>Hello World</HelloWorld>
				<Image
					max={{height:400,width:200}}
					default={{width:200,height:100}}
					deleteOnError={true}
					src="https://source.unsplash.com/random/800x600"
				/>
				<HelloWorld>Hello World</HelloWorld>
			</>
		)
	}
}
