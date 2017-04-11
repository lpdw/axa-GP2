window.onload = function(){

  var itemgroupe = document.getElementById("itemgroupe");
  var dropdown = document.getElementById("dropdown-groupe");
  var chevron = document.getElementById("chevron");
  console.log(chevron.src);

  itemgroupe.onclick = function() {
    var style = window.getComputedStyle(dropdown),
    display = style.getPropertyValue('display');

    if (display == "none") {
      dropdown.style.display = "block";
      chevron.src = "assets/img/chevron-down.png";
    } else {
      dropdown.style.display = "none";
      chevron.src = "assets/img/chevron.png";
    }
  };

};
