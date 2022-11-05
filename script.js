const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');

const showSuccessBorder = (input) => {
  input.parentElement.className = 'form-control success';
};

const showErrorMessage = (input, message) => {
  input.parentElement.className = 'form-control error';
  input.nextElementSibling.innerText = message;
};

const checkEmail = (input) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim())) {
    showSuccessBorder(email);
  } else {
    showErrorMessage(email, 'Email is not valid!');
  }
};

const checkIfEmpty = (array) => {
  array.forEach((input) => {
    if (input.value.trim() === '') {
      showErrorMessage(input, `${getInputName(input)} is required!`);
    } else {
      showSuccessBorder(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showErrorMessage(
      input,
      `${getInputName(input)} must be at least ${min} characters!`
    );
  } else if (input.value.length > max) {
    showErrorMessage(
      input,
      `${getInputName(input)} must be less than ${max} characters!`
    );
  } else {
    showSuccessBorder(input);
  }
};

const checkMatch = (password, confirmation) => {
  if (password !== confirmation) {
    showErrorMessage(confirmation, 'Passwords do not match!');
  }
};

const getInputName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  checkIfEmpty([username, email, password, confirmation]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});
