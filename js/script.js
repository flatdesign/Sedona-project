"use strict";

var openButton = document.querySelector(".main-nav__button-open");
var closeButton = document.querySelector(".main-nav__button-close");
var menu = document.querySelector(".main-nav__list");

openButton.addEventListener("click", function(evt) {
	menu.classList.add("menu-open");	
	closeButton.classList.remove("none");

	document.addEventListener("keydown", function(evt) {
		if(evt.keyCode == 27) {
			evt.preventDefault();
			menu.classList.remove("menu-open");
			menu.classList.add("menu-close");
			document.removeEventListener("keydown", function(evt) {
				if(evt.keyCode == 27) {
					evt.preventDefault();
					menu.classList.remove("menu-open");
					menu.classList.add("menu-close");
				}
			});
		}
	});

	closeButton.addEventListener("click", function() {
		menu.classList.remove("menu-open");
		menu.classList.add("menu-close");
		document.removeEventListener("keydown", function(evt) {
			if(evt.keyCode == 27) {
				evt.preventDefault();
				menu.classList.remove("menu-open");
				menu.classList.add("menu-close");
			}
		});
	});
});


var success = document.querySelector(".popup_success");
var failure = document.querySelector(".popup_failure");
var submitButton = document.querySelector(".emotion__button");
var form = document.querySelector(".main-form");
var successButton = success.querySelector(".button");
var failureButton = failure.querySelector(".button");


submitButton.addEventListener("click", function(evt) {
	if(form.checkValidity())
	{
		evt.preventDefault();
		success.classList.remove("success_close");
		success.classList.add("success_open");
		document.addEventListener("keydown", function(evt) {
			if(evt.keyCode == 27) {
				success.classList.remove("success_open");
				success.classList.add("success_close");

				document.removeEventListener("keydown", function(evt) {
					if(evt.keyCode == 27) {
						success.classList.remove("success_open");
						success.classList.add("success_close");
					}
				});
			}
		});
	}	
	else
	{
		failure.classList.remove("failure_close");
		failure.classList.add("failure_open");
		document.addEventListener("keydown", function(evt) {
			if(evt.keyCode == 27) {
				failure.classList.remove("failure_open");
				failure.classList.add("failure_close");

				document.removeEventListener("keydown", function(evt) {
					if(evt.keyCode == 27) {
						failure.classList.remove("failure_open");
						failure.classList.add("failure_close");
					}
				});
			}
		});
	}
});

successButton.addEventListener("click", function(evt) {
	success.classList.remove("success_open");
	success.classList.add("success_close");
});

failureButton.addEventListener("click", function() {
	failure.classList.remove("failure_open");
	failure.classList.add("failure_close");
});


