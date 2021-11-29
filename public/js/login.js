const cardContainer = document.querySelector(".sign-in");
const singUpOption = document.querySelector("#createAcc");
const signInOption = document.querySelector("#logIn");
const iconContainerWht = document.querySelector("#iconContainerWht");
const iconContainerBlk = document.querySelector("#iconContainerBlk");

const login = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/nftpage");
    } else {
      alert(response.statusText);
    }
  }
};

const signup = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(password);
  console.log(name);
  console.log(email);
  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/nftpage");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", login);
document.querySelector(".signup-form").addEventListener("submit", signup);

cardContainer.addEventListener("click", (e) => {
  const cardRightButton = e.target.closest(".signin-btn");
  const cardLeftButton = e.target.closest(".signup-btn");

  if (cardRightButton) {
    cardRightButton.parentNode.parentNode.parentNode.classList.add(
      "card__right"
    );
    signInOption.setAttribute("class", "hidden");
    singUpOption.setAttribute("class", "multi-container");
    iconContainerWht.setAttribute("class", "icon-container-blk");
  }

  if (cardLeftButton) {
    cardLeftButton.parentNode.parentNode.parentNode.classList.remove(
      "card__right"
    );
    singUpOption.setAttribute("class", "hidden");
    signInOption.setAttribute("class", "multi-container");
    iconContainerWht.setAttribute("class", "icon-container-wht");
  }
});
