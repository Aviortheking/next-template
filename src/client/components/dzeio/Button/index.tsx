import React, { FC } from 'react'
import Link from '../Link'
import { ColorType, IconProps } from '../interfaces'
import { buildClassName } from '../Util'
import Image from '../Image'

import css from './Button.module.styl'

interface Props {
	outline?: boolean
	nomargintop?: boolean
	color?: ColorType
	children?: React.ReactNode
	icon?: FC<IconProps> | string
	size?: 'large' | 'small' | 'block'
	href?: string
	as?: string
	disabled?: boolean
	loading?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement, MouseEvent>) => void
}

export default class Button extends React.Component<Props> {

	public render = () => {

		let inner: any = this.props.children

		if (!this.props.loading && this.props.icon) {
			const Icon = this.props.icon
			inner = (
				<>
					{typeof Icon === 'string' ? (
						<Image src={Icon} max={{ height: 16, width: 16 }} />
					) : (
						<Icon size={16} />
					)}
					{this.props.children && (
						<span className={css.textInner}>{this.props.children}</span>
					)}
				</>
			)
		}

		const classes = buildClassName(
			[css.button],
			[css[this.props.color as string], this.props.color],
			[css.outline, this.props.outline],
			[css[this.props.size as string], this.props.size],
			[css.nomargintop, this.props.nomargintop],
			[css.loading, this.props.loading]
		)

		if (this.props.href) {
			return (
				<Link href={this.props.href} as={this.props.as} className={buildClassName([classes], [css.disabled, this.props.disabled])}>
					{inner}
				</Link>
			)
		}

		return (
			<button onClick={this.props.onClick} disabled={this.props.disabled} className={classes}>{inner}</button>
		)
	}

}
