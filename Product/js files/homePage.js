let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
console.log(products);
let startIndex = 0;

function loadMore() {
  let table = document.getElementById("productTable");
  if (startIndex === 0) {
    table.innerHTML = "";
  }
  for (let i = startIndex; i < startIndex + 5 && i < products.length; i++) {
    let product = products[i];
    let row = `<tr>
                        <td>${product.productName}</td>
                        <td>${product.productQty}</td>
                        <td>${product.productPrice}</td>
                        <td><button id="bt_+${id}">Add to Cart</button></td>
                   </tr>`;
    table.insertAdjacentHTML("beforeend", row);
  }
  startIndex += 5;
}

function loadLess() {
  let table = document.getElementById("productTable");
  let rows = table.rows.length;
  for (let i = 0; i < 5 && rows > 1; i++) {
    table.deleteRow(rows - 1);
    rows--;
  }
  startIndex -= 5;
  if (startIndex < 0) {
    startIndex = 0;
  }
}
loadMore();
