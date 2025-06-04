//pop up (add to cart confirm)
function openPopUp1() {
  //const openButton = document.getElementById("toConfirmAdd");
  let popUpBox = document.getElementById("actualPopUpBox1");
  let classes = popUpBox.classList;
  // openButton.addEventListener("click", () => {
  classes.add("open");

  //popUpBox.classList.add("open");
}

/*function openPopUp2() {
  let popUpBox = document.getElementById("actualPopUpBox2");
  let classes = popUpBox.classList;
  classes.add("open");
}*/

//const btnEl2 = document.querySelector(".item2");

//btnEl2.addEventListener("click", openPopUp2);

//order confirmation pop up
function confirmPurchase() {
  let popUp = document.getElementById("orderConfirmation");
  let classes = popUp.classList;
  classes.add("open");
}

/*function addToCart() {
  const item = document.getElementById("forProductOne");
  let classes = item.classList;
  item.classList.remove("hidden");
}

function addToCart() {
  let item = document.getElementById("forProductOne");
  let itemContainer = document.getElementById("cartList");

  let classes = document.getElementById("forProductOne").classList;
  classes.add("showInCart");

  itemContainer.appendChild(item);
}*/

/*let total = document.getElementById("Total");
total = 0;*/

//return numberItems;
/*const totalItems = document.getElementById("cartList");
let numberItems = totalItems.childElementCount;
*/
/*
let totalItems = 3;
function updateTotal() {
  let price = document.getElementById("total");
  let total = 51;
  if ((totalItems = 3)) {
    price = total;
  } else if ((totalItems = 2)) {
    price = total - 17;
  } else if ((totalItems = 1)) {
    price = total - 34;
  } else if ((totalItems = 0)) {
    price = 0;
  }
  price.innerHTML = "Total + " price;
}

function updateTotal() {
  let totalItems = document.getElementById("cartList").children.length;
  console.log(totalItems);
  totalItems.textContent = "yay";
}



let numberItems;
numberItems = document.getElementById("cartList").childElementCount;

function updateTotal() {
  // let numberItems;
  let total = document.getElementById("total");
  if (numberItems == 0) {
    total = "Total: $0.00";
  } else if (numberItems === 1) {
    total = "Total: $17.00";
  }

  total.textContent = total;
}here*/

//let newtotal = -17;
//total.textContent = newtotal;

/*
function updateTotal() {
  let totalItems = document.getElementById("cartList").children.length;
  console.log(totalItems);
}

function updateTotal() {
  let totalItems = document.querySelector("div(.productInCart):not(.hidden)");
  console.log(totalItems);
}*/

//remove items from cart desktop
function removeOne() {
  const item = document.getElementById("forProductOne");
  item.classList.add("hidden");
  //  totalItems -= 1;  updateTotal();
}
function removeTwo() {
  const item = document.getElementById("forProductTwo");
  item.classList.add("hidden");
  //  totalItems -= 1;  updateTotal();
}
function removeThree() {
  const item = document.getElementById("forProductThree");
  item.classList.add("hidden");
  // totalItems -= 1;  updateTotal();
}

//remove items from cart mobile
function removeOne() {
  const item = document.getElementById("forProductOne");
  item.classList.add("hide");
  //  totalItems -= 1;  updateTotal();
}
function removeTwo() {
  const item = document.getElementById("forProductTwo");
  item.classList.add("hide");
  //  totalItems -= 1;  updateTotal();
}
function removeThree() {
  const item = document.getElementById("forProductThree");
  item.classList.add("hide");
  // totalItems -= 1;  updateTotal();
}

//cart related

/*
let removeCartItemButtons = document.getElementsByClassName("button-remove");
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons; //[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.style.display = "none";
  });
}

/*function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
} */
