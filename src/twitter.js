// Get hashtags
const hashtags = document.getElementsByClassName('hashtag')
hashtagString = ''
for (const hashtag of hashtags) {
	hashtagString +=
		hashtagString === ''
			? hashtag.textContent.substr(1)
			: ',' + hashtag.textContent.substr(1)
}

// Find blockquote and replace it with Twitter sharing tooltip & functionality
const quotes = document.getElementsByTagName('blockquote')
for (let quote of quotes) {
	const anchor = document.createElement('a')

	const twitterHandle =
		document.getElementsByClassName('social-icon twitter').length > 1
			? document
					.getElementsByClassName('social-icon twitter')[1]
					.href.split('twitter.com/')
			: null

	const author = twitterHandle ? ` by @${twitterHandle[1]}` : ``

	const textContent = `${
		document.getElementsByClassName('title')[0].textContent
	}${author}: “${quote.textContent}”`

	anchor.href = `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
		textContent
	)}&url=${encodeURI(
		window.location.href
	)}&via=ProgressOrg&hashtags=${hashtagString}`

	anchor.innerText = quote.textContent

	anchor.setAttribute('class', 'highlight')

	anchor.setAttribute('target', '_system')

	quote.innerHTML = anchor.outerHTML

	tippy(quote, {
		content:
			'<span style="font-weight:500; font-size:18px;">Share via Twitter</span>',
		arrow: true
	})
}
