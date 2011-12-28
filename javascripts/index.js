function getWindowHeight() {
	var windowHeight = 0;

	if (typeof(window.innerHeight) == "number") {
		windowHeight = window.innerHeight;
	} else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		} else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}

	return windowHeight;
}