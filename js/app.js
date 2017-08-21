(function() {
    "use strict";

    var addinput = document.getElementById("addinput"),
        addbtn = document.getElementById("addbtn"),
        list = document.getElementById("list");

    function addItem() {
        var li = document.createElement("li"),
            elem = list.appendChild(li);
        li.innerHTML = "<span class='list-item'>" + addinput.value + "</span><span class='todo__body__list__remove'></span><span class='todo__body__list__done'></span>";
        list.insertBefore(elem, list.firstChild);
        addinput.value = "";
    }
    addinput.addEventListener("keyup", function(e) {
        e.preventDefault();
        if (e.keyCode == 13) {
            addbtn.click();
        }
    });
    addbtn.addEventListener("click", function() {
        addItem();
    }, false);

})();