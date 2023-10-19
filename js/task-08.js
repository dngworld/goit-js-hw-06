const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
