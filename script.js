function expandSection(sectionId, button) {
	let section = document.getElementById(sectionId);
	if (section.classList.contains("expanded")) {
	  section.classList.remove("expanded");
	  button.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
	} else {
	  section.classList.add("expanded");
	  button.innerHTML = "Close";
	}
  }
  