// Use Compose plugin for easier maintenance
const withPlugins = require('next-compose-plugins')
const { plugins, config } = require('@dzeio/config/next.config')

/**
 * @type {import('next').NextConfig}
 */
const modifiedConfig = {
	images: {
		unoptimized: true
	}
}

module.exports = withPlugins([...plugins],
	{...config(), ...modifiedConfig}
)
