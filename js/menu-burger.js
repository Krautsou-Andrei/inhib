const menuButton = document.querySelector(".menu-burger__button");
const menuBurger = document.querySelector(".menu-burger");

menuButton.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  menuButton.classList.toggle("active");
});

// const buttonOrder = document.querySelector(".button-order");

// const formHeadingElement = document.querySelector(".form__heading");
// const footerTop = document.querySelector(".footer-top");
// const addressHeading = document.querySelector(".address__heading");
// const headingActive = document.querySelector(".heading--active");
// const formFieldset = document.querySelector(".form__fieldset");
// const formCheckBox = document.querySelector(".form__check-box");
// const headingOrder = document.querySelector(".heading--order");
// const formMessage = document.querySelector(".form__message");
// const buttonActive = document.querySelector(".button--active");
// const buttonDisabled = document.querySelector(".button--disabled");

// buttonOrder.addEventListener("click", () => {
//   formHeadingElement.classList.toggle("order");
//   footerTop.classList.toggle("order");
//   addressHeading.classList.toggle("order");

//   headingActive.classList.toggle("disabled");
//   formFieldset.classList.toggle("disabled");
//   formCheckBox.classList.toggle("disabled");

//   headingOrder.classList.toggle("active");
//   formMessage.classList.toggle("active");

//   buttonActive.classList.toggle("disabled");
//   buttonDisabled.classList.toggle("active");
//   buttonOrder.classList.toggle("disabled");
// });
