import React, { Component } from 'react';
import Button from './button';
import logo from './logo.svg';
import axios from 'axios';
import marked from 'marked';
import markdownSection1 from './advanced-configuration.md';

import './App.css';
// TODO integrate Gatsby for docs
// TODO integrate react-styleguidist for storyboard
// TODO integrate react-styleguidist for storyboard
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown: ''
		};
	}
	// Replace with Gatsby
	componentWillMount() {
		fetch(markdownSection1)
			.then((response) => {
				return response.text();
			})
			.then((text) => {
				this.setState({
					markdown: marked(text)
				});
			});
	}
	componentDidMount() {
		fetch('/search?q=javascript')
			.then((resp) => {
				console.log('======success search request=======');
				this.processResp(resp);
				return fetch('/todos');
			})
			.then((todos) => {
				console.log('======success todos request=======');
				todos.json().then((json) => console.log(json));
				return axios.get('/posts');
			})
			.then((posts) => {
				console.log('======success posts request=======');
				console.log(posts);
			})
			.catch((err) => {
				console.log('======failure=======');
				console.log(err);
			});
		var user = '';
		var pass = '';
		// var user = prompt('Pandora username', 'user');
		// var pass = prompt('Pandora password', 'pass');

		var reqBody = `{"existingAuthToken":null,"username":${user},"password":${pass},"keepLoggedIn":true}`;
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
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				response.json().then(function(data) {
					window.localStorage.setItem('XAuthToken', data.authToken);

					var xAuthTok = window.localStorage.getItem('XAuthToken');
					// csrftoken = document.cookie
					// 	.split(';')
					// 	.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
					// 	.split('=')[1]
					//  APIs
				});
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err);
			});
		var user = '';
		var pass = '';
		//var user = prompt('Pandora username', 'user');
		//var pass = prompt('Pandora password', 'pass');

		var reqBody = `{"existingAuthToken":null,"username":${user},"password":${pass},"keepLoggedIn":true}`;
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
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				response.json().then(function(data) {
					window.localStorage.setItem('XAuthToken', data.authToken);

					var xAuthTok = window.localStorage.getItem('XAuthToken');
					// csrftoken = document.cookie
					// 	.split(';')
					// 	.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
					// 	.split('=')[1]
					//  APIs
				});
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err);
			});
	}

	processResp(resp) {
		resp.blob().then((re) => {
			var FR = new FileReader();
			FR.onload = (event) => {
				console.log(FR.result);
			};
			FR.readAsText(re);
		});
	}

	render() {
		const { markdown } = this.state;

		return (
			<div className="App">
				{/* Replace with Gatsby */}
				<details>
					<summary>Click to open</summary>
					<section>
						<article dangerouslySetInnerHTML={{ __html: markdown }} />
					</section>
				</details>
				<p>
					<h2>
						<a href="https://github.com/facebook/create-react-app/issues/2406">Click to Open Editor Feature of Error Overlay Documentation</a>
					</h2>
				</p>
				<p>
					<header>
						<h4>
							<a href="https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#docsNav">Adding Custom Environment Variables</a>
							<br />
							<br />
							Locally
						</h4>
					</header>
					[process.env.NODE_ENV] = {process.env.NODE_ENV}
					<br />
					You are running this application in <b>development</b> <br />
				</p>
				<p>
					{' '}
					REACT_APP_SECRET_CODE=abcdef npm start <br /> REACT_APP_SECRET_CODE=abcdef react-scripts start
				</p>
				<p>
					[process.env.REACT_APP_SECRET_CODE] = {process.env.REACT_APP_SECRET_CODE}
					<br />
					You are running secret code <b>abcdef</b> secret mode.
				</p>
				<p>
					You are editing [process.env.REACT_EDITOR] <b>{process.env.REACT_EDITOR} code</b> <b />
					editor.
				</p>
				<h2>
					<a href="https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f">
						Live edit and debug your React apps directly from VS Code — without leaving the editor 🔥 🎉🎈
					</a>
				</h2>
				<img
					class="progressiveMedia-image js-progressiveMedia-image"
					data-src="https://cdn-images-1.medium.com/max/800/1*74lkRfxrsJlxEWXCwSOF_Q.gif"
					src="https://cdn-images-1.medium.com/max/800/1*74lkRfxrsJlxEWXCwSOF_Q.gif"
				/>
				<p />
				<center>
					<Button actionName="Hey Open Dev Tools and Click Me" />
				</center>
			</div>
		);
	}
}

export default App;
