/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet()
## The `greet()` function

The `greet` function should take one argument, a `String` which specifies the 24-hour time in the format `HH:MM`.
---- //?Military time?
- //*If the time is earlier than 12pm(12:00..1200), return "Good Morning".
  => if time < 1200 return "Good Morning"
- //*If the time is between 12pm and 5pm, return "Good Afternoon".
  => if time > 1200 && time < 1700 return "Good Afternoon"
- //*If the time is later than 5pm, return "Good Evening".*/
  // => if time > 1700 return "Good Evening"

  function greet(timeString) {
  let militaryTime = timeString.replace(":", "");
  militaryTime = parseInt(militaryTime, 10)
  if (militaryTime < 1200 && militaryTime > 0) {
    return "Good Morning";
  }
  if (militaryTime >= 1200 && militaryTime < 1700) {
    return "Good Afternoon";
  }
  if (militaryTime > 1700) {
    return "Good Evening";
  }
  else {
    console.log("Please enter time in HH:MM format")
  }
};


function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
