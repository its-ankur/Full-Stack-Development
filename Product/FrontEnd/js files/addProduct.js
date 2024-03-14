let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productQty = document.querySelector("#productQty");
let saveButton = document.querySelector("#saveButton");
let productsList = document.querySelector("#productsList");
let counter = 0;
let products = [];
let mode = 0;
let id = -1;

saveButton.addEventListener("click", () => {
  if (mode == 0) {
    counter++;
    //Step 1
    let obj = {};
    obj.productName = productName.value;
    obj.productPrice = productPrice.value;
    obj.productQty = productQty.value;
    obj.id = counter;
    counter++;
    products.push(obj);
    saveLocalStorage();

    UI(obj);
    console.log(products);
  }
  if (mode == 1) updateProduct();
  productName.value = "";
  productPrice.value = "";
  productQty.value = "";
});
const UI = (obj) => {
  let productDiv = document.createElement("div");

  let nameSpan = document.createElement("span");
  nameSpan.innerHTML = obj.productName;
  nameSpan.setAttribute("id", "s1" + obj.id);

  productDiv.appendChild(nameSpan);
  productDiv.appendChild(document.createTextNode(" "));
  let qtySpan = document.createElement("span");
  qtySpan.innerHTML = obj.productQty;
  qtySpan.setAttribute("id", "s2" + obj.id);

  productDiv.appendChild(qtySpan);
  productDiv.appendChild(document.createTextNode(" "));
  let priceSpan = document.createElement("span");
  priceSpan.innerHTML = obj.productPrice;
  priceSpan.setAttribute("id", "s3" + obj.id);
  productDiv.appendChild(priceSpan);
  productDiv.appendChild(document.createTextNode(" "));
  let delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  productDiv.appendChild(document.createTextNode(" "));
  delButton.addEventListener("click", () => {
    productDiv.remove();
    products = products.filter((item) => {
      if (item.id != obj.id) return true;
    });
    console.log(products);
    saveLocalStorage();
  });

  let updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.addEventListener("click", () => {
    productName.value = obj.productName;
    productPrice.value = obj.productPrice;
    productQty.value = obj.productQty;
    mode = 1;
    id = obj.id;
  });

  productDiv.appendChild(updateButton);
  productDiv.appendChild(document.createTextNode(" "));
  productDiv.appendChild(delButton);
  productDiv.appendChild(document.createTextNode(" "));
  productsList.appendChild(productDiv);
};

const saveLocalStorage = () => {
  localStorage.setItem("products", JSON.stringify(products));
};
const fetchLocalStorage = () => {
  products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  products.forEach((item) => {
    if (counter < item.id) counter = item.id;
    UI(item);
  });
};
fetchLocalStorage();

const updateProduct = () => {
  if (id == -1) return;

  products = products.map((item) => {
    if (item.id == id) {
      item.productName = productName.value;
      item.productPrice = productPrice.value;
      item.productQty = productQty.value;
    }
    return item;
  });
  saveLocalStorage();
  document.querySelector("#s1" + id).innerHTML = productName.value;
  document.querySelector("#s2" + id).innerHTML = productQty.value;
  document.querySelector("#s3" + id).innerHTML = productPrice.value;

  console.log(products);
};
