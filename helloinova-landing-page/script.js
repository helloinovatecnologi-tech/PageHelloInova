const CONFIG = {
  // Substitua pelo número oficial da HelloInova, somente números.
  // Exemplo: 5511999999999
  whatsappNumber: "5511997311132",

  // Para receber leads em um backend, Formspree, Make, Zapier ou outra API,
  // informe a URL abaixo. Enquanto estiver vazia, o formulário abrirá
  // uma conversa no WhatsApp com os dados preenchidos.
  leadEndpoint: ""
};

const header = document.querySelector(".header");
const menuButton = document.getElementById("menuButton");
const navigationMenu = document.getElementById("navigationMenu");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");
const phoneInput = document.getElementById("phone");
const currentYear = document.getElementById("currentYear");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function closeMenu() {
  menuButton.classList.remove("active");
  navigationMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  const isOpen = navigationMenu.classList.toggle("open");

  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function buildWhatsAppLink(message = "") {
  const normalizedNumber = CONFIG.whatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalizedNumber}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;
}

function configureWhatsAppLinks() {
  const defaultMessage =
    "Olá! Conheci a HelloInova pelo site e gostaria de conversar sobre um projeto.";

  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = buildWhatsAppLink(defaultMessage);
  });
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function validateConfiguration() {
  const normalizedNumber = CONFIG.whatsappNumber.replace(/\D/g, "");

  return normalizedNumber.length >= 12 && !normalizedNumber.includes("000000");
}

async function sendLeadToEndpoint(data) {
  const response = await fetch(CONFIG.leadEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Não foi possível enviar o formulário.");
  }
}

function sendLeadToWhatsApp(data) {
  const message = [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${data.name}`,
    `Empresa: ${data.company || "Não informada"}`,
    `E-mail: ${data.email}`,
    `WhatsApp: ${data.phone}`,
    `Tipo de projeto: ${data.projectType}`,
    "",
    "Descrição:",
    data.message
  ].join("\n");

  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}

async function handleFormSubmit(event) {
    event.preventDefault();

    if (!leadForm.checkValidity()) {
        leadForm.reportValidity();
        return;
    }

    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const formData = new FormData(leadForm);

    const nome = formData.get("name");
    const empresa = formData.get("company");
    const email = formData.get("email");
    const telefone = formData.get("phone");
    const projeto = formData.get("projectType");
    const orcamento = formData.get("budget");
    const descricao = formData.get("message");

    const mensagem = `
    🚀 *NOVA SOLICITAÇÃO - HELLOINOVA*

    ━━━━━━━━━━━━━━━

    👤 *Nome*
    ${nome}

    🏢 *Empresa*
    ${empresa || "Não informado"}

     *📧 E-mail*
    ${email}

    📱 *WhatsApp*
    ${telefone}

    💼 *Tipo de Projeto*
    ${projeto}

    💰 *Orçamento*
    ${orcamento || "Não informado"}

    📝 *Descrição*
    ${descricao}

    ━━━━━━━━━━━━━━━

    📅 *Data:* ${data}
    🕒 *Hora:* ${hora}
    `;

        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

        leadForm.reset();

        showFormMessage(
            "✅ O WhatsApp foi aberto. Basta clicar em Enviar para concluir sua solicitação.",
            "success"
        );    
}

function setupRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach((element) => observer.observe(element));
}

window.addEventListener("scroll", updateHeader);

menuButton.addEventListener("click", toggleMenu);

navigationMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

phoneInput.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});

leadForm.addEventListener("submit", handleFormSubmit);

currentYear.textContent = new Date().getFullYear();

updateHeader();
configureWhatsAppLinks();
setupRevealAnimation();
