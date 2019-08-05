/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = time => {
  let newTime = parseInt(time.replace(':', ''));
  return newTime < 1200 ? 'Good Morning' : newTime > 1700 ? 'Good Evening' : 'Good Afternoon';
}


/* Write your implementation of displayMessage() */

const displayMessage = message => {
  let target = document.querySelector('#greeting');
  target.innerText = message;
}