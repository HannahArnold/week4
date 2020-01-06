//alert("Hello");
let button = document.getElementById("add");
let textBox = document.getElementById("input");
let deleteButton = document.createElement("delete");

function addItem() {
  let item = textBox.value;
  let listItem = document.createElement("li");
  let list = document.getElementById("todo");
  listItem.innerHTML = item;
  list.appendChild(listItem);

  return listItem;
}

button.addEventListener("click", deleteTask);
button.addEventListener("click", addItem);
