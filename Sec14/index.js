//Associates html element with css
$("h1").addClass("big-title");
//Modifies the text of button
$("button").text($("h1").hasClass("big-title"));
//Changes innerHTML
$("button").html("<em>Hey!</em>");
//Access attribute
console.log($("img").attr("src"));
//Changes attribute
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "blue");
});

/*
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}
*/

//Same above using jQuery
$("button").click(function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});

//Create element
$("h1").before("<button>New Button</button>");
//FUNCTIONS => before, after, prepend, append
//before => outside the selected element =/= prepend => inside the selected element. Same for after =/= append

//Remove element
//$("h1").remove();

/*
//Hide element
$("button").on("click", function () {
  $("h1").fadeToggle();
});
*/

$("button").on("click", function () {
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });