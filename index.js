/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let timeint = parseInt(time, 10);
  if(timeint < 12 && timeint > 0){
    return "Good Morning"
  } else if (timeint > 12 && timeint < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message){
  const greeting = document.getElementById("greeting")
  greeting.innerText = message
}