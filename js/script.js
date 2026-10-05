"use strict";

const allDates = document.querySelectorAll(".date-mar");
const allDateChangers = document.querySelectorAll(".dates-value-changer-key");
const allForwardKeys = document.querySelectorAll(".forward-key");
const allBackwardKeys = document.querySelectorAll(".backward-key");
const forwardKeyMonth1 = document.getElementById("forward-key-month-1");
const backwardKeyMonth1 = document.getElementById("backward-key-month-1");
const forwardKeyMonth2 = document.getElementById("forward-key-month-2");
const backwardKeyMonth2 = document.getElementById("backward-key-month-2");
const reserveTicketsButton = document.getElementById("reserve-tickets-button");
const addToCartButton = document.getElementById("add-to-cart-button");
const ticketMessage = document.querySelector(".tickets-message-container");
const ticketMessageDismissButton = document.getElementById(
  "ticket-message-dismiss",
);
const ticketMessageButton = ticketMessageDismissButton.previousElementSibling;

function hideMessage() {
  ticketMessage.style.display = "none";
}

function showMessage() {
  ticketMessage.style.display = "flex";
}

/*
function addToCartTour(qty) {
  const fetchedCart = localStorage.getItem("cartTour");
  console.log(localStorage.getItem("cartTour"));
  if (fetchedCart === null) {
    localStorage.setItem("cartTour", qty);
  } else {
    let cartQTY = fetchedCart[0];
    let newCartQTY = (cartQTY += qty);
    localStorage.setItem("cartTour", newCartQTY);
  }
}
  */

allDates.forEach((date) => {
  date.addEventListener("click", () => {
    // Ability to remove by clicking again
    if (date.classList.contains("date-mar-clicked")) {
      date.classList.remove("date-mar-clicked");
    } else {
      // Remove class from others before adding to clicked
      allDates.forEach((date) => {
        date.classList.remove("date-mar-clicked");
      });
      date.classList.add("date-mar-clicked");
    }
  });
});

allBackwardKeys.forEach((key) => {
  key.setAttribute("disabled", "disabled");
  key.addEventListener("click", (event) => {
    event.preventDefault();
    const amount = key.nextElementSibling;
    let amountNumber = parseInt(amount.textContent);
    if (amountNumber === 2) {
      amountNumber -= 1;
      amount.textContent = amountNumber;
      key.setAttribute("disabled", "disabled");
    } else if (amountNumber === 10) {
      amountNumber -= 1;
      amount.textContent = amountNumber;
      amount.nextElementSibling.removeAttribute("disabled");
    } else {
      amountNumber -= 1;
      amount.textContent = amountNumber;
    }
  });
});

allForwardKeys.forEach((key) => {
  key.addEventListener("click", (event) => {
    event.preventDefault();
    const amount = key.previousElementSibling;
    let amountNumber = parseInt(amount.textContent);
    if (amountNumber === 9) {
      amountNumber += 1;
      amount.textContent = amountNumber;
      key.setAttribute("disabled", "disabled");
    } else if (amountNumber === 1) {
      amountNumber += 1;
      amount.textContent = amountNumber;
      amount.previousElementSibling.removeAttribute("disabled", "disabled");
    } else {
      amountNumber += 1;
      amount.textContent = amountNumber;
    }
  });
});

reserveTicketsButton.addEventListener("click", (event) => {
  event.preventDefault();
  const amount =
    reserveTicketsButton.previousElementSibling.previousElementSibling
      .firstElementChild.nextElementSibling;
  const messageHeader = ticketMessage.firstElementChild;
  const message = messageHeader.nextElementSibling;
  let amountNumber = parseInt(amount.textContent);
  if (!document.querySelector(".date-mar-clicked")) {
    showMessage();
    messageHeader.textContent = "Error";
    message.textContent = "No date has been picked";
    ticketMessageButton.textContent = "OK";
  } else {
    const clickedDate = document.querySelector(".date-mar-clicked");
    const clickedDateNr = parseInt(clickedDate.textContent);
    messageHeader.textContent = "Success!";
    message.textContent = `You reserved ${amountNumber} ticket(s) on Mar ${clickedDateNr}. Click the button below to claim`;
    ticketMessageButton.textContent = "CLAIM";
    ticketMessageButton.addEventListener("click", () => {
      window.location.href = "./under-construction.html";
    });
    showMessage();
  }
});

addToCartButton.addEventListener("click", (event) => {
  event.preventDefault();
  const amount =
    addToCartButton.previousElementSibling.previousElementSibling
      .firstElementChild.nextElementSibling;
  const messageHeader = ticketMessage.firstElementChild;
  const message = messageHeader.nextElementSibling;
  let amountNumber = parseInt(amount.textContent);
  if (!document.querySelector(".date-mar-clicked")) {
    showMessage();
    messageHeader.textContent = "Error";
    message.textContent = "No date has been picked";
    ticketMessageButton.textContent = "OK";
  } else {
    const clickedDate = document.querySelector(".date-mar-clicked");
    const clickedDateNr = parseInt(clickedDate.textContent);
    const totalPrice = 70 * amountNumber;
    messageHeader.textContent = "Success!";
    message.textContent = `You added ${amountNumber} ticket(s) on Mar ${clickedDateNr} for a total of ${totalPrice} NOK. Click the button below to go to your cart, or X to stay on this page`;
    ticketMessageButton.textContent = "CART";
    ticketMessageButton.addEventListener("click", () => {
      window.location.href = "./under-construction.html";
    });
    showMessage();
  }
});

forwardKeyMonth1.addEventListener("click", (event) => {
  event.preventDefault();
});
backwardKeyMonth1.addEventListener("click", (event) => {
  event.preventDefault();
});
forwardKeyMonth2.addEventListener("click", (event) => {
  event.preventDefault();
});
backwardKeyMonth2.addEventListener("click", (event) => {
  event.preventDefault();
});

ticketMessageButton.addEventListener("click", hideMessage);
ticketMessageDismissButton.addEventListener("click", hideMessage);

hideMessage();
