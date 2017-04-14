window.addEventListener("load", function() {
    var button = document.querySelector("#close-cookies");

    button.addEventListener("click", function() {
        document.querySelector(".bandeau-cookies").classList.add("is-hidden");
    });

});
