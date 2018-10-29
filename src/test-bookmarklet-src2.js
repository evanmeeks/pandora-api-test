// document.addEventListener('favsLoaded', () => loadFavs(thumbs));
var getThumbs = (apiUri) => {
	var csrftoken = document.cookie.split(';')

	var [tok] = csrftoken.filter((res) => {
		var p = '' + res
		console.log('p', p)
		var isToken = p.indexOf('csrftoken') >= 0
		console.log('isToken', isToken)
		return isToken
	})
	var cToken = tok.split('=')[1]
	window.localStorage.setItem('xCsrftoken', cToken)
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
			'x-csrftoken': cToken
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
				window.localStorage.setItem('xAuthToken', data.authToken)
				var xAuthTok = window.localStorage.getItem('xAuthToken')
				var csrftoken = document.cookie.split(';')

				var [tok] = csrftoken.filter((res) => {
					var p = '' + res
					console.log('p', p)
					var isToken = p.indexOf('csrftoken') >= 0
					console.log('isToken', isToken)
					return isToken
				})
				var cToken = tok.split('=')[1]
				fetch(apiUri, {
					credentials: 'include',
					headers: {
						accept: 'application/json, text/plain, */*',
						'accept-language': 'en-US,en;q=0.9,de;q=0.8',
						'cache-control': 'no-cache',
						'content-type': 'application/json',
						pragma: 'no-cache',
						'x-authtoken': xAuthTok,
						'x-csrftoken': cToken
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

var Favs = (loadUrl) => {
	var stationurl = 'https://www.pandora.com/station/play/3654583373176567545'
	var storeFavs = (favsUrl) => {
		var allTracks = []

		newWin.opener.localStorage.setItem(favsUrl, JSON.stringify(allTracks))
	}

	newWin = window.open(stationurl, 'newWin', 'height=200,width=400,status=yes,toolbar=no,menubar=no')
	newWin.onload = ((newWin) => {
		var stationurl = 'https://www.pandora.com/station/play/3654583373176567545'
		var cb = storeFavs(stationurl)

		if (newWin.document.readyState == 'loading') {
			newWin.document.addEventListener('DOMContentLoaded', storeFavs(stationurl))
		} else {
			storeFavs(stationurl)
		}
	})(newWin)
}

var thumbsUp = 'https://www.pandora.com/api/v1/station/getFeedback'
Favs()
// var bookMarks = 'https://www.pandora.com/api/v1/bookmark/getBookmarks'
getThumbs(thumbsUp)
// getThumbs(bookMarks)
