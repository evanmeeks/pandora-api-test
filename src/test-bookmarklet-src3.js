getThumbs = () => {
	var csrftoken = document.cookie
		.split(';')
		.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
		.split('=')[1]

	// TODO: Add Netlify env
	var user = ''
	var pass = ''
	var reqBody = `{"existingAuthToken":null,"username":${user},"password":${pass},"keepLoggedIn":true}`
	fetch('https://www.pandora.com/api/v1/auth/login', {
		credentials: 'include',
		headers: {
			accept: 'application/json, text/plain, */*',
			'accept-language': 'en-US,en;q=0.9,de;q=0.8',
			'cache-control': 'no-cache',
			'content-type': 'application/json',
			pragma: 'no-cache',
			'x-csrftoken': csrftoken
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
				csrftoken = document.cookie
					.split(';')
					.filter((res) => !('' + res.indexOf('csrftoken') === 1))[0]
					.split('=')[1]
				fetch('https://www.pandora.com/api/v1/station/getFeedback', {
					credentials: 'include',
					headers: {
						accept: 'application/json, text/plain, */*',
						'accept-language': 'en-US,en;q=0.9,de;q=0.8',
						'cache-control': 'no-cache',
						'content-type': 'application/json',
						pragma: 'no-cache',
						'x-authtoken': xAuthTok,
						'x-csrftoken': csrftoken
					},
					referrer: 'https://www.pandora.com/profile/thumbs/ed209m',
					referrerPolicy: 'no-referrer-when-downgrade',
					body: '{"pageSize":100,"startIndex":0,"webname":"ed209m"}',
					method: 'POST',
					mode: 'cors'
				})
					.then(function(response) {
						if (response.status !== 200) {
							console.log('Looks like there was a problem. Status Code: ' + response.status)
							return
						}
						response.json().then(function(data) {
							window.localStorage.setItem('getFeedback', JSON.stringify(data))
						})
					})
					.catch(function(err) {
						console.log('Fetch Error :-S', err)
					})
			})
		})
		.catch(function(err) {
			console.log('Fetch Error :-S', err)
		})
}
getThumbs()
