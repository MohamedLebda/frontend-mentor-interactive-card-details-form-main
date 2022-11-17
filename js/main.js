// write card name
const cardName = document.getElementById("card-name");
const onCardName = document.querySelector(".card-name");

cardName.addEventListener("input", (e) => {
  onCardName.innerText = e.target.value;
  if (e.target.value == "") {
    onCardName.innerText = "mohamed lebda";
  }
});

// write card number
const cardNumber = document.getElementById("card-num");
const onCardNumber = document.querySelector(".card-num");

cardNumber.addEventListener("input", (e) => {
  onCardNumber.innerText = e.target.value;
  if (e.target.value == "") {
    onCardNumber.innerText = "0000 0000 0000 0000";
  }
});

// write card exp date
const cardDateM = document.getElementById("card-date-mm");
const onCardDateM = document.getElementById("date-mm");
const cardDateY = document.getElementById("card-date-yy");
const onCardDateY = document.getElementById("date-yy");

cardDateM.addEventListener("input", (e) => {
  onCardDateM.innerText = e.target.value;
  if (e.target.value == "") {
    onCardDateM.innerText = "00";
  }
});
cardDateY.addEventListener("input", (e) => {
  onCardDateY.innerText = e.target.value;
  if (e.target.value == "") {
    onCardDateY.innerText = "00";
  }
});

// write card cvc
const cardCvc = document.getElementById("card-cvc");
const onCardCvc = document.querySelector(".cvc");

cardCvc.addEventListener("input", (e) => {
  onCardCvc.innerText = e.target.value;
  if (e.target.value == "") {
    onCardCvc.innerText = "000";
  }
});

// validation - thx note
const form = document.getElementById("form");
const thx = document.querySelector(".thx");

form.addEventListener("submit", (e) => {
  // Input Validations
  cardNameValidation();
  cardNumberValidation();
  cardDateValidation();
  cardCvcValidation();
  if (document.querySelector(".error")) {
    e.preventDefault();
  } else {
    form.style.display = "none";
    thx.classList.add("show-confirmation-msg");
    e.preventDefault();
  }
});

// continue to form after confirmation
const continueBtn = document.getElementById("continue");
continueBtn.addEventListener("click", () => {
  form.style.display = "flex";
  thx.classList.remove("show-confirmation-msg");
});

// Validation Function

function cardNameValidation() {
  let cardNameValidation = /^[a-z]{2,}\s[a-z]{2,}$/i;
  if (cardNameValidation.test(cardName.value)) {
    cardName.classList.remove("error-border-color");
    errorResolve(cardName);
  } else {
    cardName.classList.add("error-border-color");
    errorHandler(cardName);
  }
}
function cardNumberValidation() {
  let cardNumValidation = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  if (cardNumValidation.test(cardNumber.value)) {
    cardNumber.classList.remove("error-border-color");
    errorResolve(cardNumber);
  } else {
    cardNumber.classList.add("error-border-color");
    errorHandler(cardNumber);
  }
}
function cardDateValidation() {
  let cardDateMmValidation = /^[0-1][1-9]$/;
  if (cardDateMmValidation.test(cardDateM.value)) {
    cardDateM.classList.remove("error-border-color");
  } else {
    cardDateM.classList.add("error-border-color");
  }

  //   exp date validation YY
  let cardDateYyValidation = /^2[2-7]$/;
  if (cardDateYyValidation.test(cardDateY.value)) {
    cardDateY.classList.remove("error-border-color");
  } else {
    cardDateY.classList.add("error-border-color");
  }

  if (
    cardDateMmValidation.test(cardDateM.value) &&
    cardDateYyValidation.test(cardDateY.value)
  ) {
    errorResolve(cardDateM);
  } else {
    errorHandler(cardDateM);
  }
}
function cardCvcValidation() {
  let cardCvcValidation = /^\d{3}$/;
  if (cardCvcValidation.test(cardCvc.value)) {
    cardCvc.classList.remove("error-border-color");
    errorResolve(cardCvc);
  } else {
    cardCvc.classList.add("error-border-color");
    errorHandler(cardCvc);
  }
}

// Error Handling Functions

function errorHandler(element) {
  const errorMsg = document.createElement("p");
  errorMsg.className = "error";
  errorMsg.innerText = "Error";

  if (element.nextElementSibling === null) {
    element.parentNode.appendChild(errorMsg);
  } else if (!element.nextElementSibling.classList.contains("error")) {
    element.parentNode.insertBefore(errorMsg, element.nextElementSibling);
  }

  if (element.value == "") {
    element.nextElementSibling.textContent = "Can't be blank";
  } else {
    element.nextElementSibling.textContent = "Error, wrong format";
  }
}
function errorResolve(element) {
  if (element.nextElementSibling !== null) {
    if (element.nextElementSibling.classList.contains("error")) {
      element.nextElementSibling.remove();
    }
  }
}
