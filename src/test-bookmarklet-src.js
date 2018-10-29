const loadFavs = (loadUrl) => {
	const init = () => {
		var prevTracks = localStorage.getItem('tracks')
		var tracks = []
		if (prevTracks != null && prevTracks != [] && prevTracks != 'undefined') {
			tracks = JSON.parse(prevTracks)
		}
		var songs = Array.from(newWin.document.querySelectorAll('[data-qa="track_name_link"]')).map((el) => el.innerText)

		var artists = Array.from(newWin.document.querySelectorAll('[data-qa="track_artist_name_link"]')).map((el) => el.innerText)

		var moreTracks = songs.map((song, k) => {
			return '<div>' + song + ' - ' + artists[k] + '</div>'
		})
		var allTracks = [...moreTracks, ...tracks]

		newWin.localStorage.setItem('tracks', JSON.stringify(allTracks))
	}

	var timeOutInit = () => {
		// let initMe = init(newWin);
		setTimeout(() => {
			init()

			var event = new CustomEvent('favsLoaded', { loaded: true })
			document.dispatchEvent(event)
		}, 8000)
	}
	var newWin = window.open(loadUrl, 'newWin', 'height=200,width=400,status=yes,toolbar=no,menubar=no,location=https://google.com')
	newWin.onload = ((newWin) => {
		if (newWin.document.readyState == 'loading') {
			newWin.document.addEventListener('DOMContentLoaded', timeOutInit)
		} else {
			timeOutInit()
		}
	})(newWin)
}

var bookMarks = 'https://www.pandora.com/profile/bookmarks/tracks/' + profile
var thumbs = 'https://www.pandora.com/profile/thumbs/' + profile
loadFavs(thumbs)
// loadFavs(bookMarks);

// document.addEventListener('favsLoaded', () => loadFavs(thumbs));
