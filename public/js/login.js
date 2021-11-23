const cardContainer = document.querySelector(".sign-in")
const singUpOption = document.querySelector("#createAcc")
const signInOption = document.querySelector("#logIn")

cardContainer.addEventListener("click", e => {
  const cardRightButton = e.target.closest(".signin-btn")
  const cardLeftButton = e.target.closest(".signup-btn")

  if (cardRightButton) {
    cardRightButton.parentNode.parentNode.parentNode.classList.add("card__right")
    signInOption.setAttribute('class', 'hidden')
    singUpOption.setAttribute('class', 'multi-container')
  }

  if (cardLeftButton) {
    cardLeftButton.parentNode.parentNode.parentNode.classList.remove('card__right')
    singUpOption.setAttribute('class', 'hidden')
    signInOption.setAttribute('class', 'multi-container')
  }
});

const login = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#exampleInputEmail1").value.trim();
  const password = document
    .querySelector("#exampleInputPassword1")
    .value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signup = async (event) => {
  event.preventDefault();

  const firstName = document
    .querySelector("#exampleInputFirstName1")
    .value.trim();
  const lastName = document
    .querySelector("#exampleInputLastName1")
    .value.trim();
  const email = document.querySelector("#inputEmail1").value.trim();
  const password = document.querySelector("#inputPassword1").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", login);

document.querySelector(".signup-form").addEventListener("submit", signup);
