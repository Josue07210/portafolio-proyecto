
const nav = document.getElementById("navegacion");
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.id = "menu-btn";
menuBtn.style.background = "transparent";
menuBtn.style.border = "none";
menuBtn.style.fontSize = "2rem";
menuBtn.style.cursor = "pointer";


nav.parentNode.insertBefore(menuBtn, nav);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});


const form = document.getElementById("contact-form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");


function showError(input, message) {
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains("error-message")) {
    error = document.createElement("small");
    error.className = "error-message";
    error.style.color = "red";
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
}

function clearError(input) {
  const error = input.parentNode.querySelector(".error-message");
  if (error) error.textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

nombre.addEventListener("input", () => {
  if (nombre.value.trim() === "") {
    showError(nombre, "El nombre es obligatorio");
  } else {
    clearError(nombre);
  }
});

email.addEventListener("input", () => {
  if (!validateEmail(email.value)) {
    showError(email, "Introduce un correo válido");
  } else {
    clearError(email);
  }
});

mensaje.addEventListener("input", () => {
  if (mensaje.value.trim().length < 10) {
    showError(mensaje, "El mensaje debe tener al menos 10 caracteres");
  } else {
    clearError(mensaje);
  }
});

form.addEventListener("submit", (e) => {
  if (
    nombre.value.trim() === "" ||
    !validateEmail(email.value) ||
    mensaje.value.trim().length < 10
  ) {
    e.preventDefault();
    alert("Por favor completa correctamente el formulario antes de enviarlo");
  }
});

const footer = document.getElementById("footer");
const fecha = new Date().getFullYear();
footer.insertAdjacentHTML("beforeend", `<p>Última actualización: ${fecha}</p>`);
