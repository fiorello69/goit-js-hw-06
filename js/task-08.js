const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert("Toate câmpurile trebuie completate.");
  } else {
    console.log("Datele introduse:", userData);
    loginForm.reset();
  }
});
