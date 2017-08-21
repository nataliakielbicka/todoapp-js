(function() {
    "use strict";

    var addinput = document.getElementById("addinput"),
        addbtn = document.getElementById("addbtn"),
        list = document.getElementById("list");

    function addItem() {
        var li = document.createElement("li"),
            elem = list.appendChild(li);
        li.innerHTML = "<span class='list-item'>" + addinput.value + "</span><span class='remove'></span><span class='done'></span>";
        list.insertBefore(elem, list.firstChild);
        addinput.value = "";
    }

    addbtn.addEventListener("click", function() {
        addItem();
    }, false);

})();