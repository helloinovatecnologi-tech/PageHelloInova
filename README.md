# HelloInova - Landing Page

Landing page institucional da **HelloInova**, desenvolvida para apresentar a empresa, divulgar seus serviços e captar novos clientes.

O projeto foi construído utilizando apenas tecnologias web nativas, priorizando desempenho, responsividade e facilidade de hospedagem.

---

## 🚀 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## ✨ Funcionalidades

- Landing page totalmente responsiva
- Menu mobile
- Formulário de contato
- Máscara automática para telefone
- Integração com WhatsApp
- Envio de leads para API (opcional)
- Animações e efeitos visuais
- Código leve e de fácil manutenção

---

## 📁 Estrutura do Projeto

```text
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ Configuração

### WhatsApp

No arquivo `script.js`, localize a configuração:

```javascript
whatsappNumber: "5500000000000"
```

Substitua pelo número oficial da empresa utilizando apenas números, incluindo código do país e DDD.

**Exemplo:**

```javascript
whatsappNumber: "5511999999999"
```

---

### E-mail

No arquivo `index.html`, procure por:

```html
contato@helloinova.com.br
```

Substitua pelo endereço de e-mail oficial da empresa.

---

### Instagram

No rodapé do arquivo `index.html`, altere o link do Instagram:

```html
href="#"
```

Para:

```html
href="https://instagram.com/seu_perfil"
```

---

## 📩 Captação de Leads

Por padrão, após o envio do formulário, o visitante é redirecionado para uma conversa no WhatsApp contendo todas as informações preenchidas.

Caso deseje integrar o formulário a um backend ou serviço externo, configure o endpoint no arquivo `script.js`:

```javascript
leadEndpoint: "https://seu-endpoint.com/leads"
```

Os dados serão enviados em formato JSON:

```json
{
  "name": "Nome",
  "company": "Empresa",
  "email": "email@empresa.com",
  "phone": "(00) 00000-0000",
  "projectType": "Sistema Personalizado",
  "message": "Descrição do projeto",
  "createdAt": "2026-07-15T00:00:00.000Z"
}
```

---

## ▶️ Como Executar

### 1. Clone este repositório

```bash
git clone https://github.com/helloinovatecnologi-tech/PageHelloInova.git
```

### 2. Acesse a pasta do projeto

```bash
cd PageHelloInova
```

### 3. Abra o projeto

Você pode abrir o arquivo `index.html` diretamente no navegador ou utilizar a extensão **Live Server** do Visual Studio Code para uma melhor experiência durante o desenvolvimento.

---

## 🌐 Hospedagem

Por se tratar de um projeto estático, ele pode ser publicado gratuitamente em diversas plataformas, como:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel

Não é necessário um servidor backend quando o formulário estiver configurado apenas para o WhatsApp ou para uma API externa.

---

## 📌 Sobre a HelloInova

A **HelloInova** é uma empresa especializada no desenvolvimento de soluções digitais sob medida para empresas.

### Nossos serviços

- 💻 Desenvolvimento de Sistemas Personalizados
- 🤖 Automações com Inteligência Artificial
- 🔗 Integrações entre Sistemas
- 📊 Dashboards e Business Intelligence
- 🌐 Desenvolvimento de Sites Institucionais
- 🚀 Landing Pages
- ☁️ Soluções em Nuvem
- 🛠️ Consultoria em Tecnologia

Nosso propósito é transformar ideias em soluções tecnológicas que aumentem a eficiência, reduzam custos e impulsionem resultados.

> **HelloInova**  
> *Da mente às telas.*

---

## 📄 Licença

Este projeto é disponibilizado para fins institucionais da HelloInova.

Caso deseje utilizá-lo como base para outros projetos, recomenda-se realizar as adaptações necessárias conforme sua aplicação.

---

## 👨‍💻 Desenvolvido por

**HelloInova**

🌐 Site: https://helloinova.com.br

📧 helloinovatecnologi@helloinova.com.br

📱 Instagram: https://www.instagram.com/helloinova?igsh=YXI0bmc2dnN2amR0