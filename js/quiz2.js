// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun and write something cool, it's up to you!)

var accordion = document.getElementsByClassName("acc");
var i;

for (i = 0; i < accordion.length; i++)
{
  accordion[i].onclick = function() {
	this.classList.toggle("active");
	this.nextElementSibling.classList.toggle("show");
  }
}

(function($){
	$(".links li a").click(function(event) {
		event.preventDefault();
		alert("you clicked a link, good for you");
	});
	
	$("ol li").each(function(index) {
      
	  if (index == 0) {
        this.style.color = "blue";
		this.innerHTML = "Is this text blue?";
      }
	  else if (index == 1) {
	    this.style.color = "green"; 
		this.innerHTML = "Methinks it might be green...";
	  }
	  else {
       this.style.color = "red";
	   this.innerHTML = "It is quite clearly red, now isn't it.";
      }
	});
	
	$("#fader").click(function() {
		$("body").children().fadeOut(1000, function(){
		$("body").append("<p> Goodbye! </p>");
		});
		//for some reason the append happens a few times before everything fades out
	});

	$("#d20").click(function() {
	  var number = Math.floor(Math.random() * 20) + 1;
	  $("#rolled").append("<br> " + number + "<br>");
	});
	
	console.log("this is a message for you!!!");
})(jQuery);

