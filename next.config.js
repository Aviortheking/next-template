// Use Compose plugin for easier maintenance
const withPlugins = require('next-compose-plugins')
const { plugins, config } = require('@dzeio/config/next.config')

module.exports = withPlugins([...plugins],
	config()
)
