function getWindowHeight() {
	var windowHeight = 0;

	if (typeof(window.innerHeight) === "number") {
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

function setContentPosition() {
	if (document.getElementById) {
		var windowHeight = getWindowHeight();

		if (windowHeight > 0) {
			var contentElement = document.getElementById("wrapper");
			var contentHeight = contentElement.offsetHeight;

			if (windowHeight - contentHeight > 0) {
				contentElement.style.position = "relative";
				contentElement.style.top = Math.floor(((windowHeight / 2) - (contentHeight / 2))) + "px";
			} else {
				contentElement.style.position = "static";
				contentElement.style.bottom = "10px";
			}
		}
	}
}

window.onresize = function() {
	setContentPosition();
};

$(function() {
	var popupConfig = {
		height: 600,
		width: 850,
		modal: true,
		resizable: false,
		show: "fade"
	};

	$("#wrapper").fadeIn(1000);
	setContentPosition();

	$("#footer-nav-subjects").click(function(event) {
		var popup = $("#subjects");

		popup.dialog(popupConfig);
		$(".ui-tabs", popup).tabs();
		event.preventDefault();
	});

	$("#footer-nav-our-dna").click(function(event) {
		var popup = $("#our-dna");

		popup.dialog(popupConfig);
		$(".ui-tabs", popup).tabs();
		event.preventDefault();
	});

	$("#footer-nav-scientists").click(function(event) {
		var popup = $("#scientists");

		popup.dialog(popupConfig);
		event.preventDefault();
	});
});