(function() {
	'use strict';
	const API_URL = 'https://lovers.pages.dev/api/love';

	function normalizeUrl(url) {
		try {
			const parsed = new URL(url);
			let path = parsed.pathname + parsed.search + parsed.hash;
			if (path === '/') path = '';
			return parsed.hostname.replace(/^www\./, '') + path;
		} catch (e) {
			return url;
		}
	}

	function getTargetUrl(button) {
		const href = button.getAttribute('href');
		if (!href || href === '#' || href === '') {
			return normalizeUrl(window.location.href);
		}
		if (href.startsWith('http')) {
			return normalizeUrl(href);
		}
		return normalizeUrl(window.location.origin + (href.startsWith('/') ? href : '/' + href));
	}

	function getSessionKey(url) {
		return 'love_' + url;
	}

	function isLoved(url) {
		return sessionStorage.getItem(getSessionKey(url)) === '1';
	}

	function setLoved(url, loved) {
		if (loved) {
			sessionStorage.setItem(getSessionKey(url), '1');
		} else {
			sessionStorage.removeItem(getSessionKey(url));
		}
	}

	async function fetchCount(url) {
		try {
			const response = await fetch(API_URL + '?url=' + encodeURIComponent(url));
			const data = await response.json();
			return data.count || 0;
		} catch (e) {
			return 0;
		}
	}

	async function updateCount(url, action) {
		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ url, action })
			});
			const data = await response.json();
			return data.count || 0;
		} catch (e) {
			return null;
		}
	}

	function updateButton(button, count, loved) {
		const countEl = button.querySelector('.love-count');
		if (countEl) {
			if (count > 0) {
				countEl.textContent = count;
				countEl.style.display = '';
			} else {
				countEl.style.display = 'none';
			}
		}
		if (loved) {
			button.classList.add('loved');
		} else {
			button.classList.remove('loved');
		}
	}

	function updateAllButtons(url, count, loved) {
		const buttons = document.querySelectorAll('.love-button');
		buttons.forEach(button => {
			if (getTargetUrl(button) === url) {
				updateButton(button, count, loved);
			}
		});
	}

	async function handleClick(e, button) {
		e.preventDefault();
		const url = getTargetUrl(button);
		const currentlyLoved = isLoved(url);
		const action = currentlyLoved ? 'unlike' : 'like';
		const newCount = await updateCount(url, action);
		if (newCount !== null) {
			setLoved(url, !currentlyLoved);
			updateAllButtons(url, newCount, !currentlyLoved);
		}
	}

	async function initButton(button) {
		const url = getTargetUrl(button);
		const count = await fetchCount(url);
		const loved = isLoved(url);
		updateButton(button, count, loved);
		button.addEventListener('click', (e) => handleClick(e, button));
	}

	function init() {
		const buttons = document.querySelectorAll('.love-button');
		buttons.forEach(initButton);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
