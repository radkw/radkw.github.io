var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "dismaland.jpeg";
images[1] = "banksy hotel.jpg";
images[2] = "traf square.jpg";
images[3] = "lab.jpg";

// Change Image
function changeImg(){
	document.getElementById('slide-img').src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


function displayNav(obj){
	var id= obj.id;
	if(id=='on'){
	document.getElementById('links').style.display = 'block';
	obj.id = 'off'
	}else{
		document.getElementById('links').style.display = 'none';
		obj.id = 'on'
	}
}



function openCity(evt, cityName) {
  var i, content, links;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



function blackTheme(){
	var color = "#000000";
	document.getElementById('body').style.background = color;
	document.getElementById('body').style.color = "#FFFFFF";
} 

function whiteTheme(){
	var color = "#FFFFFF";
	document.getElementById('body').style.background = color;
	document.getElementById('body').style.color = "#000000";
} 
