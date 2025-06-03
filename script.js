//pop up (add to cart confirm)

function openPopUp() {
  //const openButton = document.getElementById("toConfirmAdd");
  let popUpBox = document.getElementById("actualPopUpBox");
  let classes = popUpBox.classList;
  // openButton.addEventListener("click", () => {
  classes.add("open");

  //popUpBox.classList.add("open");
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
