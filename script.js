// Get DOM elements
const btn = document.getElementById("btn");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const outputDay = document.getElementById("dayOutput");
const outputMonth = document.getElementById("monthOutput");
const outputYear = document.getElementById("yearOutput");

// Event listener for button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

// Function to check input validity
function checkInputs() {
  let hasError = false;

  // Get input values
  const dayValue = day.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();

  // Check day input
  if (dayValue === "") {
    setErrorFor(day, "This field is required");
    hasError = true;
  } else if (isNaN(dayValue) || dayValue <= 0 || dayValue > 31) {
    setErrorFor(day, "Must be a valid day");
    hasError = true;
  } else {
    outputDay.innerHTML = day.value;
  }

  // Check month input
  if (monthValue === "") {
    setErrorFor(month, "This field is required");
    hasError = true;
  } else if (isNaN(monthValue) || monthValue <= 0 || monthValue > 12) {
    setErrorFor(month, "Must be a valid month");
    hasError = true;
  } else {
    outputMonth.innerHTML = month.value;
  }

  // Check year input
  if (yearValue === "") {
    setErrorFor(year, "This field is required");
    hasError = true;
  } else if (isNaN(yearValue) || yearValue.length !== 4 || yearValue > 2025) {
    setErrorFor(year, "Must be in the past");
    hasError = true;
  } else if (yearValue <= 1800) {
    setErrorFor(year, "Must be in the present");
    hasError = true;
  } else {
    outputYear.innerHTML = year.value;
  }

  // Clear error messages or reset outputs
  if (!hasError) {
    clearErrorMessages();
  } else {
    resetOutputs();
  }
}

// Function to set error message for an input
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");
  small.innerText = message;
  inputControl.className = "input error";
}

// Function to clear error messages
function clearErrorMessages() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    const inputControl = input.parentElement;
    const small = inputControl.querySelector("small");
    small.innerText = "";
    inputControl.className = "input";
  });
}

// Function to reset output elements
function resetOutputs() {
  outputDay.innerHTML = "--";
  outputMonth.innerHTML = "--";
  outputYear.innerHTML = "--";
}
