# 🛍️ Our Store

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech](https://img.shields.io/badge/tech-Next.js%2C_TypeScript%2C_PostgreSQL%2C_Stripe-informational)

## 📖 Sobre o Projeto

**Our Store** é uma aplicação web de e-commerce desenvolvida com **Next.js**, **TypeScript**, **PostgreSQL**, **Prisma** e **Stripe**.

O projeto permite que usuários naveguem por produtos, explorem categorias, visualizem ofertas, adicionem itens ao carrinho e finalizem compras por meio de um checkout integrado com o Stripe. A aplicação também possui autenticação com Google e uma área administrativa para acompanhamento de produtos, categorias e pedidos.

Entre os principais recursos estão:

- Login com Google usando NextAuth.js
- Catálogo de produtos organizado por categorias
- Página de detalhes do produto com imagens, preço, desconto e descrição
- Carrinho persistido no navegador com cálculo de subtotal, descontos e total
- Checkout de pagamento com Stripe
- Registro de pedidos no banco de dados
- Atualização do status do pedido via webhook do Stripe
- Página para o usuário visualizar seus pedidos
- Dashboard administrativo com visão geral de produtos, categorias e pedidos
- Interface responsiva com Tailwind CSS, Shadcn/UI e Radix UI

🔗 **Acesse o projeto online:** [adicione o link aqui](#)  
📂 **Repositório no GitHub:** [adicione o link aqui](#)

---

## 🖼️ Preview

Adicione aqui as imagens do projeto depois de fazer upload no GitHub:

```html
<table>
  <tr>
    <td><img width="300" alt="Preview da home" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
    <td><img width="300" alt="Preview do produto" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
    <td><img width="300" alt="Preview do carrinho" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
  </tr>
  <tr>
    <td><img width="300" alt="Preview do checkout" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
    <td><img width="300" alt="Preview dos pedidos" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
    <td><img width="300" alt="Preview do dashboard" src="COLE_A_URL_DA_IMAGEM_AQUI" /></td>
  </tr>
</table>
```

---

## 🚀 Funcionalidades

- 🔑 Autenticação de usuário com Google
- 🏷️ Listagem de produtos por categorias
- 🔥 Página de ofertas com produtos em desconto
- 🛒 Carrinho de compras com persistência em `localStorage`
- ➕ Controle de quantidade dos produtos no carrinho
- 💰 Cálculo automático de subtotal, descontos e total
- 💳 Checkout integrado com Stripe
- 📦 Criação e acompanhamento de pedidos
- ✅ Confirmação de pagamento via webhook do Stripe
- 📊 Dashboard administrativo com informações de produtos, categorias e pedidos
- 📱 Layout responsivo para diferentes tamanhos de tela

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

### Frameworks e Linguagens

- Next.js
- React
- TypeScript
- HTML5 & CSS3

### Estilização e UI

- Tailwind CSS
- Shadcn/UI
- Radix UI
- Lucide React
- Next Themes

### Autenticação

- NextAuth.js
- Google OAuth
- Prisma Adapter

### Banco de Dados

- PostgreSQL
- Prisma ORM

### Pagamentos

- Stripe Checkout
- Stripe Webhooks

### Utilitários

- date-fns
- clsx
- class-variance-authority
- tailwind-merge
- Sonner / React Toastify

---

## 🧱 Estrutura Principal

```bash
app/
  (shop)/        # Rotas públicas da loja
  (admin)/       # Rotas do dashboard administrativo
components/      # Componentes reutilizáveis da interface
providers/       # Providers globais, como autenticação, carrinho e toast
helpers/         # Funções auxiliares
lib/             # Configurações compartilhadas, como Prisma
prisma/          # Schema do banco de dados
```

---

## ⚙️ Como Rodar Localmente

1. Clone este repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

2. Acesse a pasta do projeto:

```bash
cd our-store
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto com as variáveis:

```bash
DATABASE_URL="postgresql://usuario:senha@host:porta/nome_do_banco"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua_chave_secreta"
GOOGLE_CLIENT_ID="seu_google_client_id"
GOOGLE_CLIENT_SECRET="seu_google_client_secret"

HOST_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sua_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="seu_stripe_webhook_secret"
```

5. Execute as migrations do banco de dados:

```bash
npx prisma migrate dev
```

6. Gere o Prisma Client:

```bash
npx prisma generate
```

7. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

8. Abra no navegador:

```bash
http://localhost:3000
```

---

## 💳 Stripe Webhook

Para confirmar pagamentos localmente, configure o Stripe CLI e encaminhe os eventos para a rota:

```bash
stripe listen --forward-to localhost:3000/api/order/payment-sucess
```

Depois, copie o webhook secret gerado pelo Stripe CLI para a variável:

```bash
STRIPE_WEBHOOK_SECRET="seu_stripe_webhook_secret"
```

---

## 👨‍💻 Autor

Desenvolvido por **Alex Walker**

💼 [GitHub](https://github.com/AlexWalkerGD)  
📧 alexwalkerson@hotmail.com

---

## 🪪 Licença

Este projeto está licenciado sob a licença MIT.  
Sinta-se livre para usar, modificar e distribuir.
