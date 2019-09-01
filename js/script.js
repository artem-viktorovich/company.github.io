/* menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav')

	if(x.className === "topnav"){
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
 */
let menu = document.getElementById("myTopnav");
let iconMenu = menu.querySelector('.icon');

iconMenu.onclick = function() {
	menu.classList.toggle('responsive');
  };
