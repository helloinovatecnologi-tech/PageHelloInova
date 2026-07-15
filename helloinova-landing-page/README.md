# Landing Page HelloInova

Landing page institucional e de captação de leads desenvolvida em HTML, CSS e JavaScript puro.

## Arquivos

- `index.html`: estrutura da página.
- `style.css`: estilos, responsividade e animações.
- `script.js`: menu mobile, formulário, máscara de telefone, WhatsApp e integração com endpoint.

## Configurações obrigatórias

### 1. WhatsApp

Abra o arquivo `script.js` e altere:

```js
whatsappNumber: "5500000000000"
```

Use o código do país, DDD e número, somente com números.

Exemplo:

```js
whatsappNumber: "5511999999999"
```

### 2. E-mail

No arquivo `index.html`, procure por:

```html
contato@helloinova.com.br
```

Substitua pelo e-mail oficial da empresa.

### 3. Instagram

No rodapé do `index.html`, substitua o `href="#"` do Instagram pelo endereço completo do perfil.

## Captação de leads

Por padrão, após o preenchimento do formulário, o site abre uma conversa no WhatsApp com os dados do lead.

Para enviar os leads diretamente para um serviço externo ou backend, informe a URL no arquivo `script.js`:

```js
leadEndpoint: "https://seu-endpoint.com/leads"
```

O formulário enviará um JSON no seguinte formato:

```json
{
  "name": "Nome",
  "company": "Empresa",
  "email": "email@empresa.com",
  "phone": "(00) 00000-0000",
  "projectType": "Sistema personalizado",
  "message": "Descrição",
  "createdAt": "2026-07-15T00:00:00.000Z"
}
```

## Como visualizar

Abra o arquivo `index.html` no navegador.

Também é possível usar a extensão Live Server no VS Code.

## Publicação gratuita

A página pode ser publicada gratuitamente em:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

Como é um site estático, não exige servidor para funcionar quando o formulário estiver configurado para WhatsApp ou serviço externo.
