const stylus = require('@zeit/next-stylus')
const purgeCSS = require('next-purgecss')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
		[stylus, {
			// cssModules: true
		}],
		[purgeCSS, {
			purgeCssPaths: [
				'pages/**/*',
				'components/**/*',
				'styl/**/*'
			],
			purgeCSS: {
				content: [
					'components/**/*.tsx',
					'pages/**/*.tsx'
				]
			}
		}],
	], {
		exportTrailingSlash: true,
		plugins: [
			["styled-jsx/babel", {
				optimizeForSpeed: true,
				vendorPrefixes: true,
				sourceMaps: true,
				plugins: ["styled-jsx-plugin-stylus"]
			}]
		]
	}
)
