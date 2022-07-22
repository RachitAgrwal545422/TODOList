let $ = document;
let ulElem = $.querySelector("ul");
let input = $.querySelector("input");
let form = $.querySelector(".add");

form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
}

input.addEventListener("keydown", addTodoHandler);
function addTodoHandler(e) {
  if (e.keyCode === 13) {
    if (input.value) {
      let newLiElem = $.createElement("li");
      newLiElem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      let newSpanElem = $.createElement("span");
      newSpanElem.innerHTML = input.value.trim();
      let newIElem = $.createElement("i");
      newIElem.className = "fa fa-trash-o delete";
      newLiElem.append(newSpanElem, newIElem);
      ulElem.append(newLiElem);
      input.value = "";

      // delete todo
      newIElem.addEventListener("click", removetodo);
      function removetodo(e) {
        e.target.parentElement.remove();
      }
    }
  }
}

// for delete default todo
let removeBtn = $.querySelectorAll(".delete");
removeBtn.forEach(function (li) {
  li.addEventListener("click", trash);
  function trash(event) {
    event.target.parentElement.remove();
  }
});
