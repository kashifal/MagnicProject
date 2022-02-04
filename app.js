















//radio 


var radio = document.getElementById('radio')


var label = radio.getElementsByClassName("not-active");

for (var i = 0; i < label.length; i++) {
  label[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active"; 
  });
}


