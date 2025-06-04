//pop up (add to cart confirm)
function openPopUp1() {
  let popUpBox = document.getElementById("actualPopUpBox1");
  let classes = popUpBox.classList;
  classes.add("open");
}

//order confirmation pop up
function confirmPurchase() {
  let popUp = document.getElementById("orderConfirmation");
  let classes = popUp.classList;
  classes.add("open");
}

//remove items from cart desktop
function removeOne() {
  const item = document.getElementById("forProductOne");
  item.classList.add("hidden");
}
function removeTwo() {
  const item = document.getElementById("forProductTwo");
  item.classList.add("hidden");
}
function removeThree() {
  const item = document.getElementById("forProductThree");
  item.classList.add("hidden");
}

//remove items from cart mobile
function removeOne() {
  const item = document.getElementById("forProductOne");
  item.classList.add("hide");
}
function removeTwo() {
  const item = document.getElementById("forProductTwo");
  item.classList.add("hide");
}
function removeThree() {
  const item = document.getElementById("forProductThree");
  item.classList.add("hide");
}
