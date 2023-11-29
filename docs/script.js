function switchTheme() {
	if (document.body.getAttribute('theme') === 'light') {
		document.body.setAttribute('theme', 'dark');
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme-dark.svg');
		return true;
	}
	if (document.body.getAttribute('theme') === 'dark') {
		document.body.setAttribute('theme', 'light');
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme-light.svg');
		return true;
	}
	console.log('theme not found');
	document.body.setAttribute('theme', 'light');
	document.getElementById('theme-icon').setAttribute('src', 'icons/theme-light.svg');
	return false;
}
