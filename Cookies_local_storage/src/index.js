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

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "";
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
