/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

var today = new Date();
var time = today.getHours();

function greet(time) {
  time = parseInt(time, 10)
  if ( time < 12 ) {
    return 'Good Morning';
  } else if ( time > 17 ) {
    return 'Good Evening';
  } else {
    return 'Good Afternoon';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  let content = document.getElementById("greeting");
  content = content.innerText = msg;
}

 