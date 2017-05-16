window.addEventListener("load", function(){

  /* Poly­fill IE / Microsoft Edge */

  (function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

  var items = [].slice.call(document.getElementsByClassName('header-item')),
  checkbox = [].slice.call(document.getElementsByClassName('checkbox')),
  datasize = 0;

    // Accordion
    items.forEach(function(item) {
      item.addEventListener("click", function(){
        var dropdown = this.nextSibling.nextSibling;
        var style = window.getComputedStyle(dropdown),
        display = style.getPropertyValue('display'),
        chevron = this.querySelector(".chevron");

        chevron.classList.toggle('rotate');
        dropdown.classList.toggle('hide');
      });
    });


    // Check all inputs
    checkbox.forEach(function(box){
      box.addEventListener("change", function(){
        var checkDrop = this.parentElement.nextSibling.nextSibling;
        var inputs = checkDrop.querySelectorAll("input"),
        k = 0;
        if (this.checked) {
          box.nextSibling.nextSibling.querySelector('.checked .check').classList.add("showimg");
          box.nextSibling.nextSibling.querySelector('.checked .check').classList.remove("hideimg");
          box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.add("hideimg");
          box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.remove("showimg");
          // Fill data size button
          datasize += parseInt(this.value);
          document.querySelector('.datasize').innerHTML = datasize/1000;
          inputs.forEach(function(input) {
            input.checked = true;
          });
        } else {
          // Fill data size button
          datasize -= parseInt(this.value);
          document.querySelector('.datasize').innerHTML = datasize/1000;
          inputs.forEach(function(input) {
            input.checked = false;
          });
        }
      });
    });

    checkbox.forEach(function(box) {
      var checkDrop = box.parentElement.nextSibling.nextSibling,
      allChecked = 0,
      value = box.value;
      var inputs = checkDrop.querySelectorAll("input");
      inputs.forEach(function(input){
        input.addEventListener("change", function() {
          var contentsize = 0;
          contentsize = document.querySelector('.datasize').innerHTML*1000;
          inputs.forEach(function(input){
            input.checked ? allChecked++ : '';
            // console.log(box);
          });
          if (allChecked === 0) {
            // Aucun check
            box.nextSibling.nextSibling.querySelector('.checked .check').classList.add("hideimg");
            box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.add("hideimg");
            box.checked = false;
            datasizeChange = (document.querySelector('.datasize').innerHTML)*1000;
            document.querySelector('.datasize').innerHTML = (datasizeChange - value)/1000
          } else if (allChecked === 5) {
            // Tous check
            box.nextSibling.nextSibling.querySelector('.checked .check').classList.add("showimg");
            box.nextSibling.nextSibling.querySelector('.checked .check').classList.remove("hideimg");
            box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.add("hideimg");
            box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.remove("showimg");
          } else {
            // Plusieurs check
            box.nextSibling.nextSibling.querySelector('.checked .check').classList.add("hideimg");
            box.nextSibling.nextSibling.querySelector('.checked .check').classList.remove("showimg");
            box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.add("showimg");
            box.nextSibling.nextSibling.querySelector('.checked .tiret').classList.remove("hideimg");
            box.checked = true;
            // datasize = (document.querySelector('.datasize').innerHTML)*1000;
            // document.querySelector('.datasize').innerHTML = (datasize + value)/1000
          }
          allChecked = 0;
        });
      });
    });

});
