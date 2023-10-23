const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const expectedLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );
  const inputValue = validationInput.value;

  const isValid = inputValue.length === expectedLength;

  validationInput.classList.toggle("valid", isValid);
  validationInput.classList.toggle("invalid", !isValid);
});
