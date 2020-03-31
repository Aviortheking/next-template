import React from 'react'
import '../styl/index.styl'
import HelloWorld from '../components/HelloWorld'
import Image from '../components/Image'

export default class Index extends React.Component {

	public render() {
		return(
			<>
				<HelloWorld>Hello World</HelloWorld>
				<Image
					max={{height:400,width:200}}
					default={{width:200,height:100}}
					deleteOnError={true}
					src="https://source.unusplash.com/random/800x600"
				/>
				<HelloWorld>Hello World</HelloWorld>
			</>
		)
	}
}
