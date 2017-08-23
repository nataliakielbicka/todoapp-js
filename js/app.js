(function() {
    "use strict";

    var addinput = document.getElementById("addinput"),
        addbtn = document.getElementById("addbtn"),
        todoList = document.getElementById("todo-list"),
        warning = document.getElementById("warning"),
        doneList = document.getElementById("done-list"),
        todoText = document.getElementById("todo-text"),
        todoTextDone = document.getElementById("todo-text-done");
    todoText.innerHTML = "You have no tasks to do.";
    todoTextDone.innerHTML = "You have not completed any task yet.";

    function displayInfoTodo() {
        var tdlNr = todoList.childNodes.length;
        todoText.innerHTML = (tdlNr < 1) ? "You have no tasks to do." : (tdlNr === 1) ? "You have <strong>1</strong> task to do." : "You have <strong>" + tdlNr + "</strong> tasks to do.";
    }

    function displayInfoDone() {
        var dlNr = doneList.childNodes.length;
        todoTextDone.innerHTML = (dlNr < 1) ? "You have not completed any task yet." : (dlNr === 1) ? "You have completed <strong>1</strong> task." : "You have completed <strong>" + dlNr + "</strong> tasks.";
    }

    function removeItem() {
        var item = this.parentNode.parentNode,
            removedItem = item.parentNode,
            removed = document.getElementById("removed"),
            remChild = removed.children;
        removedItem.removeChild(item);
        remChild.innerHTML = "";
        removed.style.display = "flex";
        remChild[0].innerHTML = "<a href='#' id='close'><i class='fa fa-close'></i></a> You removed&nbsp<strong>" + item.firstChild.textContent + "</strong>&nbspfrom list.";
        var close = document.getElementById("close");
        close.addEventListener("click", function(e) {
            e.preventDefault();
            var removed = document.getElementById("removed");
            removed.style.display = "none";
        });
        displayInfoTodo();
        displayInfoDone();
    }

    function doneItems() {
        var item = this.parentNode.parentNode,
            doneItem = item.parentNode,
            id = doneItem.id,
            target = (id === "todo-list") ? doneList : todoList;
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

        var todoListStr = todoList.innerHTML.toString().toLowerCase(),
            pattern = new RegExp("\\b" + liText.toLowerCase() + "\\b");
        if (todoListStr.match(pattern, "g")) {
            warning.style.opacity = 1;
            document.body.addEventListener("change", function() {
                warning.style.opacity = 0;
            });
        } else {
            todoList.insertBefore(li, todoList.firstChild);
            warning.style.opacity = 0;
        }

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