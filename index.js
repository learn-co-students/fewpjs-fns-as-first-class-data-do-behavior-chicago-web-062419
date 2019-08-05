/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  if (parseInt(time) < 12) {
    return "Good Morning"
  } else if (parseInt(time) < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  greet = document.getElementById("greeting")
  greet.innerText = message
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
