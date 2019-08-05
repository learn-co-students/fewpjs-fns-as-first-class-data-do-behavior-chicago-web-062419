/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = parseInt(timeString, 10)
  if (hour < 12)  return "Good Morning"
  if (hour > 17)  return "Good Evening"
  return "Good Afternoon"
}

// console.log(greeting("06:00"))
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}