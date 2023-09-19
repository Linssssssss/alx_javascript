function setCookies() {
  const firstnameInput = document.getElementById("firstname");
  const emailInput = document.getElementById("email");

  if (firstnameInput.value && emailInput.value) {
    document.cookie = `firstname=${firstnameInput.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `email=${emailInput.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }
}

function showCookies() {
  const cookieOutput = document.getElementById("cookieOutput");
  cookieOutput.innerHTML = "";

  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    const p = document.createElement("p");
    p.innerHTML = `Cookies: ${name}=${value}`;
    cookieOutput.appendChild(p);
  }
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
}
