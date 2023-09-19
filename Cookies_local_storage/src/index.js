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
// Check if local storage is available
function isLocalStorageSupported() {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}

if (!isLocalStorageSupported()) {
  alert(
    "Sorry, your browser does not support Web storage. Try again with a better one."
  );
} else {
  // Create an array of available items
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  // Function to add an item to the cart
  function addItemToCart(item) {
    localStorage.setItem(item, "true");
    displayCart();
  }

  // Function to create the store and display available items
  function createStore() {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (const item of availableItems) {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => addItemToCart(item));
      ul.appendChild(li);
    }
  }

  // Function to display the cart content
  function displayCart() {
    const cartItems = Object.keys(localStorage);
    const cartItemCount = cartItems.length;

    if (cartItemCount === 0) {
      return; // Do nothing if the cart is empty
    }

    const message = `You previously had ${cartItemCount} item${
      cartItemCount > 1 ? "s" : ""
    } in your cart.`;

    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  }

  // Create the store and display cart on page load
  createStore();
  displayCart();
}
// Check if session storage is available
function isSessionStorageSupported() {
  try {
    sessionStorage.setItem("test", "test");
    sessionStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}

if (!isSessionStorageSupported()) {
  alert(
    "Sorry, your browser does not support Session storage. Try again with a better one."
  );
} else {
  // Create an array of available items
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  // Function to add an item to the cart
  function addItemToCart(item) {
    sessionStorage.setItem(item, "true");
    displayCart();
  }

  // Function to create the store and display available items
  function createStore() {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (const item of availableItems) {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => addItemToCart(item));
      ul.appendChild(li);
    }
  }

  // Function to display the cart content
  function displayCart() {
    const cartItems = Object.keys(sessionStorage);
    const cartItemCount = cartItems.length;

    if (cartItemCount === 0) {
      return; // Do nothing if the cart is empty
    }

    const message = `You previously had ${cartItemCount} item${
      cartItemCount > 1 ? "s" : ""
    } in your cart.`;

    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  }

  // Create the store and display cart on page load
  createStore();
  displayCart();
}
// Check if session storage is available
function isSessionStorageSupported() {
  try {
    sessionStorage.setItem("test", "test");
    sessionStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}

if (!isSessionStorageSupported()) {
  alert(
    "Sorry, your browser does not support Session storage. Try again with a better one."
  );
} else {
  // Create an array of available items
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  // Function to parse the cart from session storage
  function getCartFromStorage() {
    const cartJSON = sessionStorage.getItem("cart");
    return cartJSON ? JSON.parse(cartJSON) : {};
  }

  // Function to add an item to the cart
  function addItemToCart(item) {
    const cart = getCartFromStorage();
    cart[item] = cart[item] ? cart[item] + 1 : 1;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }

  // Function to remove an item from the cart
  function removeItemFromCart(item) {
    const cart = getCartFromStorage();
    delete cart[item];
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }

  // Function to clear the entire cart
  function clearCart() {
    sessionStorage.removeItem("cart");
    displayCart();
  }

  // Function to create the store and display available items
  function createStore() {
    const h2 = document.createElement("h2");
    h2.textContent = "Available products:";
    document.body.appendChild(h2);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (const item of availableItems) {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => addItemToCart(item));
      ul.appendChild(li);
    }
  }

  // Function to display the cart content
  function displayCart() {
    const h2 = document.createElement("h2");
    h2.textContent = "Your cart:";
    document.body.appendChild(h2);

    const cartDiv = document.createElement("div");
    cartDiv.id = "cartDiv";

    const cart = getCartFromStorage();
    const cartKeys = Object.keys(cart);

    if (cartKeys.length === 0) {
      cartDiv.textContent = "Your cart is empty.";
    } else {
      const ul = document.createElement("ul");
      ul.id = "cartList";

      for (const item of cartKeys) {
        const li = document.createElement("li");
        li.textContent = `${item} x ${cart[item]} `;

        const removeButton = document.createElement("button");
        removeButton.textContent = "(remove)";
        removeButton.addEventListener("click", () => removeItemFromCart(item));

        li.appendChild(removeButton);
        ul.appendChild(li);
      }

      const clearButton = document.createElement("button");
      clearButton.textContent = "Clear my cart";
      clearButton.addEventListener("click", clearCart);

      cartDiv.appendChild(ul);
      cartDiv.appendChild(clearButton);
    }

    const existingCartDiv = document.getElementById("cartDiv");
    if (existingCartDiv) {
      existingCartDiv.remove();
    }

    document.body.appendChild(cartDiv);
  }

  // Create the store and display cart on page load
  createStore();
  displayCart();
}
