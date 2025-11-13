
var button = document.getElementById("paraBox");
var white = document.getElementById('whiteLineId');
button.addEventListener('change', function(){
    if (button.checked) {
      white.style.backgroundImage = "url('img.jpg')";
    } else {
      white.style.backgroundImage = "url('para.png')";
    }
  });


var reverser = document.getElementById("reverserId");
reverser.addEventListener('change',function(){

	if(reverser.checked){
		document.getElementById('blueLineId').style.background = "rgb(248,185,42)";
		document.getElementById("levelUp").style.color = "rgb(29,83,159)";
	}
	else{
		document.getElementById('blueLineId').style.background = "rgb(29,83,159)";
		document.getElementById("levelUp").style.color = "rgb(248,185,42)";
	}

});