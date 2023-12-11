const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('theme'))
	theme(urlParams.get('theme'));
function switchTheme() {
	if (document.body.getAttribute('theme') === 'light') {
		theme('dark');
		return;
	}
	if (document.body.getAttribute('theme') === 'dark') {
		theme('light');
		return;
	}
	theme('light');
}
function theme(value) {
	if (value === 'light') {
		document.body.setAttribute('theme', 'light');
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme-light.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from light to dark');
		return;
	}
	if (value === 'dark') {
		document.body.setAttribute('theme', 'dark');
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme-dark.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from dark to light');
		return;
	}
}
