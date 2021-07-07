/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(hour){
  const converted_time = parseInt(hour)
  if (converted_time < 12) {
    return "Good Morning";
  } 
  else if (converted_time > 12 && converted_time <= 17){ 
    return "Good Afternoon";
  } 
  else {
    return "Good Evening";
  }
} 

function displayMessage(msg){
 document.getElementById("greeting").innerText = msg ;
}

// 