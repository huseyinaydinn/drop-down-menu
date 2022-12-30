const selectFiled = document.getElementById("selectFiled");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

selectFiled.onclick = function() {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}
for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}