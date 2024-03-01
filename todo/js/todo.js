let taskname = document.querySelector("#taskname");
let tasks = document.querySelector("#tasks");
let counter = 1;
let alltasks = [];
taskname.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) AddTask();

  //AddtoUI();

  //console.log("enter handled");
});

function AddtoUI(obj) {
  let div = document.createElement("div");
  div.setAttribute("data", obj.id);

  let span = document.createElement("span");
  //let txtnode=document.createTextNode(taskname.value);
  //span.appendChild(txtnode);
  span.innerText = obj.title;

  let chk = document.createElement("input");
  chk.type = "checkbox";
  chk.addEventListener("click", () => {
    let status = "pending";
    if (chk.checked) status = "completed";
    alltasks = alltasks.map((item) => {
      if (item.id == obj.id) item.status = status;
      return item;
    });
    console.log(alltasks);
  });

  div.appendChild(span);
  div.appendChild(chk);

  let delbutton = document.createElement("Button");
  delbutton.innerText = "Del";

  delbutton.addEventListener("click", deleteButton);

  div.appendChild(delbutton);

  tasks.appendChild(div);
  taskname.value = "";
}
function deleteButton(e) {
  let parent = e.target.parentNode;
  let id = parent.getAttribute("data");
  parent.remove();
  alltasks = alltasks.filter((item) => {
    if (item.id != id) return true;
  });
  console.log(alltasks);
}

function AddTask() {
  let obj = {};
  obj.title = taskname.value;
  obj.status = "pending";
  obj.id = counter;
  counter++;
  alltasks.push(obj);
  AddtoUI(obj);
  console.log(alltasks);
}
