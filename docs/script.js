function switchTheme() {
	if (document.body.getAttribute('theme') === 'light') {
		document.body.setAttribute('theme', 'dark');
		document.getElementById('theme-icon').setAttribute('class', 'fa-solid fa-moon');
		return true;
	}
	if (document.body.getAttribute('theme') === 'dark') {
		document.body.setAttribute('theme', 'light');
		document.getElementById('theme-icon').setAttribute('class', 'fa-solid fa-sun');
		return true;
	}
	console.log('theme not found');
	document.body.setAttribute('theme', 'light');
	document.getElementById('theme-icon').setAttribute('class', 'fa-solid fa-sun');
	return false;
}
