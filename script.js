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
return totalItems;

function updateTotal() {
  let numberItems = totalItems.children.length;
  let total = document.getElementById("total");
  if (numberItems == 0) {
    total = "Total: $0.00";
  } else if (numberItems === 1) {
    total = "Total: $17.00";
  }

  total.textContent = total;
} */

//let newtotal = -17;
//total.textContent = newtotal;

//remove items from cart
function removeOne() {
  const item = document.getElementById("forProductOne");
  let classes = item.classList;
  item.classList.add("hidden");
  updateTotal();
}
function removeTwo() {
  const item = document.getElementById("forProductTwo");
  let classes = item.classList;
  item.classList.add("hidden");
  updateTotal();
}
function removeThree() {
  const item = document.getElementById("forProductThree");
  let classes = item.classList;
  item.classList.add("hidden");
  updateTotal();
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
