function expandCV() {
	var cv = document.getElementById("cv");
	var btn = document.querySelector(".box2 button");
	if (cv.classList.contains("expanded")) {
		cv.classList.remove("expanded");
		btn.innerHTML = "CV";
	} else {
		cv.classList.add("expanded");
		btn.innerHTML = "Close";
	}
}

function expandContact() {
	var contact = document.getElementById("contact");
	var btn = document.querySelector(".box3 button");
	if (contact.classList.contains("expanded")) {
		contact.classList.remove("expanded");
		btn.innerHTML = "Contact";
	} else {
		contact.classList.add("expanded");
		btn.innerHTML = "Close";
	}
}
