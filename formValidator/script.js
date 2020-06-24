const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

showError = (input, message) => {
  // parentElement returns the parentElement in this case is 'form-control' div
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // querySelector can take in a tag, a class, id whatever you'd like
  const small = formControl.querySelector("small");
  small.innerText = message;
};

showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

isEmailValid = (email) => {
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidation.test(String(email).toLowerCase());
};

//  eventListeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isEmailValid(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password confirmation is required");
  } else {
    showSuccess(password2);
  }
});
