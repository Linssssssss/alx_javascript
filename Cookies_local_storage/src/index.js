function setCookies() {
  const firstnameInput = document.getElementById("firstname");
  const emailInput = document.getElementById("email");

  if (firstnameInput.value && emailInput.value) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10); // Expires in 10 days

    document.cookie = `firstname=${
      firstnameInput.value
    }; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${
      emailInput.value
    }; expires=${expirationDate.toUTCString()}`;
  }
}

function showCookies() {
  const emailCookie = getCookie("email");
  const firstnameCookie = getCookie("firstname");

  const cookieOutput = document.getElementById("cookieOutput");
  cookieOutput.innerHTML = "";

  const p = document.createElement("p");
  p.innerHTML = `Email: ${emailCookie} - Firstname: ${firstnameCookie}`;
  cookieOutput.appendChild(p);
}
function showForm() {
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage) {
    welcomeMessage.remove();
  }
  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
}

function hideForm() {
  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";
}

function deleteCookiesAndShowForm() {
  document.cookie =
    "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

function showWelcomeMessageOrForm() {
  const emailCookie = getCookie("email");
  const firstnameCookie = getCookie("firstname");

  const welcomeContainer = document.getElementById("welcomeContainer");
  const formContainer = document.getElementById("formContainer");

  if (!emailCookie || !firstnameCookie) {
    showForm();
  } else {
    // Clear existing content
    welcomeContainer.innerHTML = "";

    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = `Welcome ${firstnameCookie} `;
    const logoutLink = document.createElement("a");
    logoutLink.textContent = "(logout)";
    logoutLink.style.fontWeight = "normal";
    logoutLink.style.fontStyle = "italic";
    logoutLink.style.marginLeft = "10px";
    logoutLink.href = "javascript:void(0)";
    logoutLink.addEventListener("click", deleteCookiesAndShowForm);

    welcomeMessage.appendChild(logoutLink);
    welcomeContainer.appendChild(welcomeMessage);
  }
}
function setCookiesAndShowWelcomeMessage() {
  const firstnameInput = document.getElementById("firstname");
  const emailInput = document.getElementById("email");

  if (firstnameInput.value && emailInput.value) {
    // Set cookies using js-cookie
    Cookies.set("firstname", firstnameInput.value, { expires: 10 });
    Cookies.set("email", emailInput.value, { expires: 10 });

    // Show the welcome message
    showWelcomeMessageOrForm();
  }
}

function deleteCookiesAndShowForm() {
  // Remove cookies using js-cookie
  Cookies.remove("firstname");
  Cookies.remove("email");

  showForm();
}
showWelcomeMessageOrForm();
