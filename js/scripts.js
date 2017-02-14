$(document).ready(function(){
  $(".clickable").click(function(){
    $("#octo-show").slideToggle();
    $("#octo-hide").slideToggle();
  });
  $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
  });
  $("button#bgDark").click(function() {
      $("body").removeClass();
      $("body").addClass("dark-background");
  });
  $("button#bgLight").click(function() {
      $("body").removeClass();
      $("body").addClass("light-background");
  });

  $(".clickable2").click(function() {
    $("#warning-show").toggle();
    $("#warning-hide").toggle();
  });

});
