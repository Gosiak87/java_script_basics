//po przyciśnięciu guzika element listy jest przenoszony do drugiej listy.


document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".moveBtn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var parentId = this.parentElement.parentElement.id;
            if (parentId === "list1") {
                var targetId = "list2";
            } else {
                var targetId = "list1";
            }
            var targetList = document.getElementById(targetId);
            targetList.appendChild(this.parentElement);
        });
    }
});

