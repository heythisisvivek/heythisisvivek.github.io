var navnav = document.querySelector(".nav-nav");
var navmenu = document.getElementById("nav-menu");

navnav.addEventListener("click",() => {
	if(navmenu.className === "nav-menu") {
		navmenu.className = "nav-res";
		navnav.innerHTML = "&#10005;";
	} else {
		navmenu.className = "nav-menu";
		navnav.innerHTML = "&#9776;";
	}
})