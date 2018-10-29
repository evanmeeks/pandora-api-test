import React, { Component } from 'react'
import Button from './button'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'

class App extends Component {
	componentDidMount() {
		fetch('/search?q=javascript')
			.then((resp) => {
				console.log('======success search request=======')
				this.processResp(resp)
				return fetch('/todos')
			})
			.then((todos) => {
				console.log('======success todos request=======')
				todos.json().then((json) => console.log(json))
				return axios.get('/posts')
			})
			.then((posts) => {
				console.log('======success posts request=======')
				console.log(posts)
			})
			.catch((err) => {
				console.log('======failure=======')
				console.log(err)
			})

		var user = 'ed209m@gmail.com'
		var pass = 'gasswords'
		var reqBody = `{"existingAuthToken":null,"username":${user},"password":${pass},"keepLoggedIn":true}`
		fetch('/api/v1/auth/login', {
			credentials: 'include',
			headers: {
				accept: 'application/json, text/plain, */*',
				'accept-language': 'en-US,en;q=0.9,de;q=0.8',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				pragma: 'no-cache'
				// 'x-csrftoken': csrftoken
			},
			referrer: 'https://www.pandora.com/account/sign-in',
			referrerPolicy: 'no-referrer-when-downgrade',
			body: reqBody,
			method: 'POST',
			mode: 'cors'
		})
			.then(function(response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status)
					return
				}
				response.json().then(function(data) {
					window.localStorage.setItem('XAuthToken', data.authToken)

					var xAuthTok = window.localStorage.getItem('XAuthToken')
					// csrftoken = document.cookie
					// 	.split(';')
					// 	.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
					// 	.split('=')[1]
					//  APIs
				})
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err)
			})

		var reqBody = `{"existingAuthToken":null,"username":${user},"password":${pass},"keepLoggedIn":true}`
		fetch('https://pandora.com/api/v1/auth/login', {
			credentials: 'include',
			headers: {
				accept: 'application/json, text/plain, */*',
				'accept-language': 'en-US,en;q=0.9,de;q=0.8',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				pragma: 'no-cache'
				// 'x-csrftoken': csrftoken
			},
			referrer: 'https://www.pandora.com/account/sign-in',
			referrerPolicy: 'no-referrer-when-downgrade',
			body: reqBody,
			method: 'POST',
			mode: 'no-cors'
		})
			.then(function(response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status)
					return
				}
				response.json().then(function(data) {
					window.localStorage.setItem('XAuthToken', data.authToken)

					var xAuthTok = window.localStorage.getItem('XAuthToken')
					// csrftoken = document.cookie
					// 	.split(';')
					// 	.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
					// 	.split('=')[1]
					//  APIs
				})
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err)
			})
	}

	processResp(resp) {
		resp.blob().then((re) => {
			var FR = new FileReader()
			FR.onload = (event) => {
				console.log(FR.result)
			}
			FR.readAsText(re)
		})
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Testing:{' '}
						<a href="https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables">
							https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
						</a>
					</p>
					<p>
						You are running this application in <b>{process.env.NODE_ENV}</b> mode. You are running this application in <b>{process.env.NODE_ENV}</b> mode.
					</p>
					<p>
						You are running secret code <b>{process.env.REACT_APP_SECRET_CODE}</b> mode.
					</p>
					<p>
						You are editing <b>{process.env.REACT_APP_EDITOR}</b> mode.
					</p>
					Edit <code>src/App.js</code> and save to reload.
					<p />
					<Button actionName="Test Vscode Debug" />
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		)
	}
}

export default App
