function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (x != "") {
        alert("Thanks for logging in");
    }
    
  } 

function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
