(function() {
    "use strict";

    var addinput = document.getElementById("addinput"),
        addbtn = document.getElementById("addbtn"),
        todoList = document.getElementById("todo-list"),
        doneList = document.getElementById("done-list"),
        todoText = document.getElementById("todo-text"),
        todoTextDone = document.getElementById("todo-text-done");
    todoText.innerHTML = "You have no tasks to do.";
    todoTextDone.innerHTML = "You have not completed any task yet.";

    function displayInfoTodo() {
        todoText.innerHTML = (todoList.childNodes.length < 1) ? "You have no tasks to do." : (todoList.childNodes.length === 1) ? "You have 1 task to do." : "You have " + todoList.childNodes.length + " tasks to do.";
    }

    function displayInfoDone() {
        todoTextDone.innerHTML = (doneList.childNodes.length < 1) ? "You have not completed any task yet." : (doneList.childNodes.length === 1) ? "You have completed 1 task." : "You have completed " + doneList.childNodes.length + " tasks.";
    }

    function removeItem() {
        var item = this.parentNode.parentNode,
            removedItem = item.parentNode;
        removedItem.removeChild(item);
        displayInfoTodo();
        displayInfoDone();
    }

    function doneItems() {
        var item = this.parentNode.parentNode,
            doneItem = item.parentNode,
            id = doneItem.id,
            target = (id === 'todo-list') ? doneList : todoList;
        doneItem.removeChild(item);
        target.insertBefore(item, target.firstChild);
        displayInfoTodo();
        displayInfoDone();
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
        displayInfoTodo();
        displayInfoDone();
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