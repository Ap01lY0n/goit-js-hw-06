const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
  const expectedLength = validationInput.getAttribute("data-length");
  const actualLength = validationInput.value.length;
  if (actualLength === Number(expectedLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
