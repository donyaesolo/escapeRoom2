function base() {
	document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
}
//Randomizer
var rock;
var y;


//																											Rock Random
function random() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");


	rock = Math.floor(Math.random() * 3);
	if (rock == 1){
		document.images["rockc"].src ="images/rock.png";
		c.addEventListener("click", hey);
		a.addEventListener("click", blank);
		b.addEventListener("click", blank);
		y  = 1;

	}else if (rock == 2) {
		document.images["rocka"].src ="images/rock.png"
		a.addEventListener("click", hey);
		c.addEventListener("click", blank);
		b.addEventListener("click", blank);
		y = 2;

	}else{
		document.images["rockb"].src ="images/rock.png"
		b.addEventListener("click", hey);
		c.addEventListener("click", blank);
		a.addEventListener("click", blank);
		y = 3;


	}
}

//																											Key Random
var q;
var key;
function randomn() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");


	key = Math.floor(Math.random() * 3);
	if (key == 1){
		v.style.display = "inline";
		document.images["keyc"].src ="images/key.png";
		c.addEventListener("click", heyk);
		a.addEventListener("click", blank);
		b.addEventListener("click", blank);
		q = 1;

	}else if (key == 2) {
		f.style.display = "inline";
		a.removeEventListener("click", blank);
		document.images["keya"].src ="images/key.png"
		a.addEventListener("click", heyk);
		c.addEventListener("click", blank);
		b.addEventListener("click", blank);
		q = 2;

	}else{
		g.style.display = "inline";
	  a.removeEventListener("click", hey);
		document.images["keyb"].src ="images/key.png"
		b.addEventListener("click", heyk);
		c.addEventListener("click", blank);
		a.addEventListener("click", blank);
		q = 3;
	}
}
//Page switcher
//																										Left Changer
var i = 0;
function l(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	var d = document.getElementById("door");
	var w = document.getElementById("paper");

	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");
	var restart =  i;
	if (i == 0 ){
			document.images["rocka"].src ="images/back.png";
			document.images["rockb"].src="images/back.png";
			document.images["rockb"].src = "images/back.png";
		  document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			d.style.display = "block";
		  document.images["window"].src = "images/back.png";
		  document.images["busha"].src ="";
		  document.images["bushb"].src ="";
		  document.images["bushc"].src ="";
			i = 1;
	} else if (i == 2) {
		i = 0;
	} else {
		reset()
		q = 0;
		b.removeEventListener("click", hey);
		c.removeEventListener("click", hey);
		a.removeEventListener("click", hey);
		b.removeEventListener("click", heyk);
		c.removeEventListener("click", heyk);
		a.removeEventListener("click", heyk);
		b.removeEventListener("click", blank);
		c.removeEventListener("click", blank);
		a.removeEventListener("click", blank);
		randomn();
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		w.style.display ="inline";
		document.images["paper"].src = "images/paper.png";
		d.style.display = "none";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";

	}
}
//																																	Right Changer
function r(){
	var d = document.getElementById("door");
	var w = document.getElementById("paper");
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	if (i == 1){
		i = 0;
	} else if (i == 0) {
			reset();
			document.images["keya"].src ="images/back.png";
			document.images["keyb"].src ="images/back.png";
			document.images["keyc"].src ="images/back.png";
			document.getElementById("change").style.backgroundImage = "url('images/wall.jpg')";
			d.style.display = "block";
			document.images["paper"].src ="images/back.png";
			document.images["window"].src = "images/back.png";
			document.images["busha"].src ="";
			document.images["bushb"].src ="";
			document.images["bushc"].src ="";
			i = 2
	} else{
		y = 0;
		b.removeEventListener("click", heyk);
		c.removeEventListener("click", heyk);
		a.removeEventListener("click", heyk);
		b.removeEventListener("click", hey);
		c.removeEventListener("click", hey);
		a.removeEventListener("click", hey);
		b.removeEventListener("click", blank);
		c.removeEventListener("click", blank);
		a.removeEventListener("click", blank);
		random();
		document.getElementById("change").style.backgroundImage = "url('images/wallb.png')";
		d.style.display = "none";
		w.style.display = "none";
		document.images["busha"].src ="images/bush.png";
		document.images["bushb"].src ="images/bush.png";
		document.images["bushc"].src ="images/bush.png";
		document.images["window"].src = "images/windows.png";
	}
}

//Newspaper
function news(){
  var x = document.getElementById("pop");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}

//Robber Way
var rock = new Boolean(false);
function next(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var v = document.getElementById("rockc");
	var f = document.getElementById("rocka");
	var g = document.getElementById("rockb");
	if (y == 1){
		rock = true;
		v.style.display = "none";
		c.style.display = "inline";
	}else if(y == 2){
		rock = true;
		f.style.display = "none";
		a.style.display = "inline";
	}else {
		rock = true;
		g.style.display = "none";
		b.style.display = "inline";
	}
}

function smash() {
	if (rock == true){
		document.images["window"].src ="images/broken.png";
		alert("You broke the window open with a rock");
		document.getElementsByTagName("a")[0].setAttribute("href", "http://www.google.com");
		rock = false;
		k = 0;
	}
}

//																														Sneaky enter
var key = new Boolean(false);
function nextb(){
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var m = document.getElementById("keyc");
	var n = document.getElementById("keya");
	var p = document.getElementById("keyb");
	if (q == 1){
		key = true;
		m.style.display = "none";
		c.style.display = "inline";
		}else if(q == 2){
		key = true;
		n.style.display = "none";
		a.style.display = "inline";
	}else {
		key = true;
		p.style.display = "none";
		b.style.display = "inline";
	}
}
function door(){
	if (key == true){
		alert("You opened the door with the key");
		document.images["door"].src ="images/open_door.png";
		document.getElementsByTagName("a")[1].setAttribute("href", "http://www.google.com");
		key = false;
		q = 0;
	}
}

//bushes
function hey() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	if (rock == 1){
		c.style.display = "none";
		alert("You found a rock");
	}else if( rock == 2) {
		a.style.display = "none";
		alert("You found a rock");
	} else {
		b.style.display = "none";
		alert("You found a rock");
	}
}
function heyk() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");

	var v = document.getElementById("keyc");
	var f = document.getElementById("keya");
	var g = document.getElementById("keyb");
	if (key == 1){
		v.classList.add("top");
		c.style.display = "none";
		alert("You found a key");
	}else if( key == 2) {
		f.classList.add("top");
		a.style.display = "none";
		alert("You found a key");
	} else{
		g.classList.add("top");
		b.style.display = "none";
		alert("You found a key");
	}
}

function reset() {
	var c = document.getElementById("bushc");
	var a = document.getElementById("busha");
	var b = document.getElementById("bushb");
	a.style.display = "inline";
	b.style.display = "inline";
	c.style.display = "inline";
}
function blank() {
	alert("You found nothing behind this bush");
}
