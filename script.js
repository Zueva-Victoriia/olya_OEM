menu.onclick = function myFunction() {
	
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
		// обязательно пробел перед " responsive"
	} else { 
		x.className = "topnav";
	}
}