const urlParams = new URLSearchParams(window.location.search);
/*if (urlParams.has('link'))
	location.replace(urlParams.get('link'));*/
if (urlParams.has('theme'))
	location.replace(window.location.origin + window.location.pathname);
const referrerParams = new URLSearchParams(document.referrer.substring(document.referrer.indexOf('?')));
if (referrerParams.has('theme'))
	theme(referrerParams.get('theme'));
document.getElementsByTagName('a').forEach(link => {
	link.href = keepParams(link.href);
});

function keepParams(url) {
	return url + '?theme=' + (document.body.getAttribute('theme') || 'light');
}
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
