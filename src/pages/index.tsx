import React from 'react'
import { Text } from '@dzeio/components'

import css from './index.module.styl'

export default class Homepage extends React.Component {

	public render = (): JSX.Element => (
		<main className={css.test}>
			<Text>Hello World !</Text>
		</main>
	)

}
