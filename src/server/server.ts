// Base Server Config
// https://nextjs.org/docs/advanced-features/custom-server
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

;(async () => {
	await app.prepare()
	createServer((req, res) => {
		// Be sure to pass `true` as the second argument to `url.parse`.
		// This tells it to parse the query portion of the URL.
		const parsedUrl = parse(req.url || '', true)

		handle(req, res, parsedUrl)
	}).listen(parseInt(process.env.PORT || '3000', 10), () => {
		console.log('> Ready on http://localhost:3000')
	})
})()
