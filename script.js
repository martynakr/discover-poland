const fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.firstName = document.getElementById("firstName");
  fields.email = document.getElementById("email");
});

// Checking if the field are empty
function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

//Checking if email address is an email address
function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

//Form validatioin
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);

  return valid;
}

class User {
  constructor(firstName, email) {
    this.firstName = firstName;
    this.email = email;
  }
}

const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

// Sending message after submitting the form
function sendContact() {
  if (isValid()) {
    let usr = new User(firstName.value, email.value);
    //document.querySelector(
    //  ".signupTitle"
    //).textContent = `Thanks for signing up, ${usr.firstName}!`;
    //Reseting form fields
    // document.querySelector("#firstName").value = "";
    // document.querySelector("#email").value = "";
    modal.style.display = "block";
    document.querySelector(
      ".modalMessage"
    ).textContent = `Thanks for signing up, ${usr.firstName}!`;
    document.querySelector("#firstName").value = "";
    document.querySelector("#email").value = "";
    //Display an error if fields are not filed if
  } else {
    modal.style.display = "block";
    document.querySelector(".modalMessage").textContent =
      "Please fill out all fields";
  }
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function destGen() {
  const hiking = document.getElementById("hiking");
  const sightseeing = document.getElementById("sightseeing");
  const sunbathe = document.getElementById("sunbathe");
  const lake = document.getElementById("lake");

  if (hiking.checked == true) {
    document.getElementById("disp").innerHTML =
      "You should go to <a href = 'tatra-mountains.html'>Tatra Mountains</a>";
  } else if (sightseeing.checked == true) {
    document.getElementById("disp").innerHTML =
      "You should go to <a href = 'wroclaw.html'>Wroclaw</a>";
  } else if (sunbathe.checked == true) {
    document.getElementById("disp").innerHTML =
      "You should go to <a href = 'baltic-sea.html'>Baltic Sea</a>";
  } else if (lake.checked == true) {
    document.getElementById("disp").innerHTML =
      "You should go to <a href = 'mazury.html'>Mazury</a>";
  } else {
    document.getElementById("disp").innerHTML = "Please select an activity";
  }
}
