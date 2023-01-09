$(document).ready(function(){

console.log("this works");



 $(".entry").click(function(){
   $(this).children(".class-info").toggleClass("hide");
   $(this).children(".button").toggleClass("inactive-button");
 });



});