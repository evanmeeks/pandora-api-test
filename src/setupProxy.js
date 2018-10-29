const proxy = require('http-proxy-middleware')
var cors = require('cors')

/*
 Testing:
	https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
	*/
module.exports = function(app) {
	app.use(cors())
	app.use(proxy('/search', { target: 'https://www.google.com', changeOrigin: true }))
	app.use(proxy('/todos', { target: 'http://jsonplaceholder.typicode.com/', changeOrigin: true }))
	app.use(proxy('/posts', { target: 'https://jsonplaceholder.typicode.com', changeOrigin: true }))
	app.use(
		proxy('/api/v1', {
			target: 'https://www.pandora.com/api/v1',
			changeOrigin: true
		})
	)
}
