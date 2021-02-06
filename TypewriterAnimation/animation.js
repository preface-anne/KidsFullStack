//The charAt() method returns the character at the specified index in a string

var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 100; 
 
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    //loop effect - Executes a function, after waiting a specified number of milliseconds.
    //can this thing happen once but with a for loop 
    setTimeout(typeWriter, speed); 
   }
}


window.onload = function() {
  typeWriter();
};

