window.onload = function(){

  var item = document.getElementsByClassName('header-item');
  var checkbox = document.getElementsByClassName('checkbox');

    for(var i = 0; i < item.length; i++) {
        var anchor = item[i];
        anchor.onclick = function() {
          var dropdown = this.nextSibling.nextSibling;
          var style = window.getComputedStyle(dropdown),
          display = style.getPropertyValue('display'),
          chevron = this.querySelector(".chevron");
          console.log(chevron);

          if (display == "none") {
            dropdown.style.display = "block";
            chevron.classList.add('rotate');
          } else {
            dropdown.style.display = "none";
            chevron.classList.remove('rotate');
          }
        };
    }

    // Check all inputs
    for(var j = 0; j < checkbox.length; j++) {
      var cas = checkbox[j];
      cas.onchange = function() {
        var checkDrop = this.parentElement.nextSibling.nextSibling;
        var inputs = checkDrop.querySelectorAll("input"),
        k = 0;
        if (this.checked === true) {
          for (k = 0; k < inputs.length; k++) {
            inputs[k].checked = true;
          }
        } else {
          for (k = 0; k < inputs.length; k++) {
            inputs[k].checked = false;
          }
        }
      };
    }
};
