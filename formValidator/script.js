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

showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

checkEmail = (input) => {
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must not be longer than ${max} characters`
    );
  }
};

checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess();
  }
};

getFieldName = (input) => {
  // Taking the first letter making it uppercase, then slicing off the first letter and returning the rest of the id
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//  eventListeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);

  // THE CODE BELOW HAS BEEN REPLACED WITH CHECKREQUIRED ABOVE WHICH IS A CLEANER ANSWER TO THE SAME PROBLEM

  // if (username.value === "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!isEmailValid(email.value)) {
  //   showError(email, "Email is not valid");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === "") {
  //   showError(password2, "Password confirmation is required");
  // } else {
  //   showSuccess(password2);
  // }
});
