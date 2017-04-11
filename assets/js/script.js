window.onload = function(){

  var itemgroupe = document.getElementById("itemgroupe");
  var dropdown = document.getElementById("dropdown-groupe");

  itemgroupe.onclick = function() {
    var style = window.getComputedStyle(dropdown),
    display = style.getPropertyValue('display');

    if (display == "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };

};
