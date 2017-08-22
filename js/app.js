(function() {
    "use strict";

    var addinput = document.getElementById("addinput"),
        addbtn = document.getElementById("addbtn"),
        todoList = document.getElementById("todo-list"),
        doneList = document.getElementById("done-list");

    function removeItem() {
        var item = this.parentNode.parentNode,
            removedItem = item.parentNode;
        removedItem.removeChild(item);
    }

    function doneItems() {
        var item = this.parentNode.parentNode,
            doneItem = item.parentNode;
        var id = doneItem.id,
            target = (id === 'todo-list') ? doneList : todoList;
        doneItem.removeChild(item);
        target.insertBefore(item, target.firstChild);
    }

    function addItem(liText) {
        var li = document.createElement("li");
        li.innerHTML = "<span class='todo__body__list__item'>" + liText + "</span>";

        var buttons = document.createElement("span");
        buttons.classList.add("todo__body__list__buttons");

        var done = document.createElement("span");
        done.classList.add("todo__body__list__buttons--done");

        var remove = document.createElement("span");
        remove.classList.add("todo__body__list__buttons--remove");

        buttons.appendChild(done);
        buttons.appendChild(remove);
        li.appendChild(buttons);
        todoList.insertBefore(li, todoList.firstChild);

        addinput.value = "";
        remove.addEventListener("click", removeItem);
        done.addEventListener("click", doneItems);
    }
    addinput.addEventListener("keyup", function(e) {
        e.preventDefault();
        if (e.keyCode == 13) {
            addbtn.click();
        }
    });
    addbtn.addEventListener("click", function() {
        var value = addinput.value;
        if (value) addItem(value);
    });

})();