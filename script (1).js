document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get ur variables and stuff
  var username = document.getElementById("Uname").value;
  var password = document.getElementById("Pass").value;
  
  // If username and password are... then you...
  if (username === "djdsryjhdjnhfg" && password === "xsjfdhsuhgdjish") {
    window.location.href = "https://www.google.com/"; // DONT FORGET TO ADD https://
  }
  // You can also add this multiple times.
  if (username === "lasgndjshndf" && password === "djsghuh") {
    window.location.href = "https://www.google.com/";
  }
    if (username === "husdhgudhu" && password === "dfsjigdjis") {
    window.location.href = "https://www.google.com/"
  }
      if (username === "adsfgdsdsfds" && password === "afddasfsdg") {
    window.location.href = "https://www.google.com/"
  }
if (username === "......ada.." && password === "..adsa..") {
    window.location.href = "https://www.google.com/"
  } 
        // If the password/username isnt correct then display a message
  else {
    document.getElementById("message").textContent = "Oh my, We can not accept your request currently. Please try again later. ";
  }
});