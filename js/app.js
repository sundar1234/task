

var $overlay=$('<div id="overlay"></div>');
var $image=$("<img>");
var $caption=$("<p></p>");
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
$("#gallery a").click(function(event){
  event.preventDefault();
var href=$(this).attr("href");
 console.log(href);
  $overlay.show();
  $image.attr("src",href);
  var capText=$(this).children("img").attr("alt");
  $caption.text(capText);

});
$overlay.click(function(){
$overlay.hide();
  
});





