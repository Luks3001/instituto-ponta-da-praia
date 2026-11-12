"use strict";

// Número oficial em formato internacional, somente dígitos. Use "" para suspender os links.
const CONFIG = Object.freeze({ whatsappNumber: "5511979556301" });

function isWhatsAppConfigured(number) {
  return /^[1-9]\d{9,14}$/.test(number);
}

function buildInterestMessage({ fullName, neighborhood, message }) {
  const introduction = `Olá! Meu nome é ${fullName.trim()}, moro no bairro ${neighborhood.trim()} e gostaria de manifestar interesse nas ações de distribuição de cestas básicas do Instituto Ponto da Praia.`;
  return message.trim() ? `${introduction}\n\nObservação: ${message.trim()}` : introduction;
}

function buildWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-principal");
const mobileViewport = window.matchMedia("(max-width: 759px)");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navigation.hidden = mobileViewport.matches && !isOpen;
}

function syncMenu() {
  menuToggle.hidden = !mobileViewport.matches;
  setMenuOpen(false);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && mobileViewport.matches) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (mobileViewport.matches && !event.target.closest(".header-inner")) setMenuOpen(false);
});
mobileViewport.addEventListener("change", syncMenu);
syncMenu();

const form = document.querySelector("#interest-form");
const submitButton = document.querySelector("#submit-interest");
const formStatus = document.querySelector("#form-status");
const contactLink = document.querySelector("#whatsapp-contact");
const requiredFields = [
  { input: document.querySelector("#full-name"), error: document.querySelector("#name-error"), message: "Informe seu nome completo." },
  { input: document.querySelector("#neighborhood"), error: document.querySelector("#neighborhood-error"), message: "Informe o bairro onde você mora." },
];

function validateField(field) {
  const valid = field.input.value.trim().length > 0;
  field.input.setAttribute("aria-invalid", String(!valid));
  field.error.textContent = valid ? "" : field.message;
  field.error.hidden = valid;
  return valid;
}

requiredFields.forEach((field) => {
  field.input.addEventListener("input", () => {
    if (field.input.hasAttribute("aria-invalid")) validateField(field);
    if (configured) formStatus.textContent = "";
  });
});
document.querySelector("#message").addEventListener("input", () => {
  if (configured) formStatus.textContent = "";
});

const configured = isWhatsAppConfigured(CONFIG.whatsappNumber);
submitButton.disabled = !configured;
contactLink.hidden = !configured;
contactLink.removeAttribute("href");
if (configured) {
  contactLink.href = `https://wa.me/${CONFIG.whatsappNumber}`;
} else {
  formStatus.textContent = "Contato temporariamente indisponível: o WhatsApp oficial ainda precisa ser configurado. O envio está desabilitado.";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isWhatsAppConfigured(CONFIG.whatsappNumber)) return;

  const invalidFields = requiredFields.filter((field) => !validateField(field));
  if (invalidFields.length) {
    formStatus.textContent = "Confira os campos indicados para continuar.";
    invalidFields[0].input.focus();
    return;
  }

  const message = buildInterestMessage({
    fullName: form.elements.fullName.value,
    neighborhood: form.elements.neighborhood.value,
    message: form.elements.message.value,
  });
  const url = buildWhatsAppUrl(CONFIG.whatsappNumber, message);
  window.open(url, "_blank", "noopener,noreferrer");
  formStatus.replaceChildren();
  const feedback = document.createTextNode("Mensagem preparada. Confirme o envio no WhatsApp. Se a nova aba não abriu, ");
  const fallbackLink = document.createElement("a");
  fallbackLink.href = url;
  fallbackLink.target = "_blank";
  fallbackLink.rel = "noopener noreferrer";
  fallbackLink.textContent = "abra o WhatsApp por este link";
  fallbackLink.className = "dark-link";
  fallbackLink.classList.add("status-link");
  formStatus.append(feedback, fallbackLink, document.createTextNode("."));
});
