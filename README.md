# 🛍️ Our Store

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech](https://img.shields.io/badge/tech-Next.js%2C_TypeScript%2C_PostgreSQL%2C_Stripe-informational)

## 📖 About the Project

**Our Store** is an e-commerce web application built with **Next.js**, **TypeScript**, **PostgreSQL**, **Prisma**, and **Stripe**.

The project allows users to browse products, explore categories, view special offers, add items to their shopping cart, and complete purchases through a Stripe-powered checkout system. The application also includes Google authentication and an administrative dashboard for managing products, categories, and orders.

Key features include:

* Google Sign-In with NextAuth.js
* Product catalog organized by categories
* Product details page with images, pricing, discounts, and descriptions
* Persistent shopping cart with subtotal, discount, and total calculations
* Stripe payment integration
* Order registration and management
* Automatic order status updates through Stripe webhooks
* User order history page
* Administrative dashboard with products, categories, and order insights
* Responsive UI built with Tailwind CSS, Shadcn/UI, and Radix UI

🔗 **Live Demo:** [Click here](https://our-store-xi.vercel.app/)

📂 **GitHub Repository:** [Click here](https://github.com/AlexWalkerGD/our-store)

---

## 🖼️ Preview

<table>
   <tr>
     <td><img width="300" height="605" alt="Captura de tela 2026-06-08 001224" src="https://github.com/user-attachments/assets/4c813e2f-8d83-4529-bcca-5efbf7809093" /></td>
     <td><img width="300" height="605" alt="Captura de tela 2026-06-08 001236" src="https://github.com/user-attachments/assets/30e669c6-499f-4cb7-84c0-c70f47846c6b" /></td>
     <td><img width="300" height="605" alt="Captura de tela 2026-06-08 001248" src="https://github.com/user-attachments/assets/04a96068-743e-4750-92d0-3468739a0d39" /></td>
     
   </tr>
  <tr>
    <td><img width="300" height="605" alt="Captura de tela 2026-06-08 001312" src="https://github.com/user-attachments/assets/4aabbad6-b726-47b1-b5b0-af3de272cb1b" /></td>
    <td><img width="300" height="605" alt="Captura de tela 2026-06-08 001324" src="https://github.com/user-attachments/assets/d7315d8c-a045-438a-acc7-0d97f9e60bb7" /></td>
    <td><img width="300" height="605" alt="image" src="https://github.com/user-attachments/assets/c29a5155-02e0-4c56-a42f-c241edd550e3" />
</td>
  </tr>
</table>

## 🚀 Features

* 🔑 User authentication with Google
* 🏷️ Product listing by categories
* 🔥 Deals page featuring discounted products
* 🛒 Shopping cart with localStorage persistence
* ➕ Product quantity management
* 💰 Automatic subtotal, discount, and total calculations
* 💳 Stripe Checkout integration
* 📦 Order creation and tracking
* ✅ Payment confirmation through Stripe webhooks
* 📊 Administrative dashboard with product, category, and order data
* 📱 Fully responsive design for different screen sizes

---

## 🛠️ Technologies and Libraries

### Frameworks & Languages

* Next.js
* React
* TypeScript
* HTML5 & CSS3

### Styling & UI

* Tailwind CSS
* Shadcn/UI
* Radix UI
* Lucide React
* Next Themes

### Authentication

* NextAuth.js
* Google OAuth
* Prisma Adapter

### Database

* PostgreSQL
* Prisma ORM

### Payments

* Stripe Checkout
* Stripe Webhooks

### Utilities

* date-fns
* clsx
* class-variance-authority
* tailwind-merge
* Sonner / React Toastify

---

## 🧱 Main Project Structure

```bash
app/
  (shop)/        # Public storefront routes
  (admin)/       # Administrative dashboard routes
components/      # Reusable UI components
providers/       # Global providers such as authentication, cart, and notifications
helpers/         # Helper functions
lib/             # Shared configurations such as Prisma
prisma/          # Database schema
```

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/AlexWalkerGD/our-store.git
```

### 2. Navigate to the project folder

```bash
cd our-store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file in the project root

```bash
DATABASE_URL="postgresql://user:password@host:port/database_name"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

HOST_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Generate the Prisma Client

```bash
npx prisma generate
```

### 7. Start the development server

```bash
npm run dev
```

### 8. Open in your browser

```bash
http://localhost:3000
```

---

## 💳 Stripe Webhooks

To test payment confirmations locally, configure the Stripe CLI and forward events to:

```bash
stripe listen --forward-to localhost:3000/api/order/payment-success
```

Then copy the generated webhook secret into:

```bash
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
```

---

## 👨‍💻 Author

Developed by **Alex Walker**

💼 [GitHub](https://github.com/AlexWalkerGD)  
📧 alexwalkerson@hotmail.com
---

## 🪪 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute it.
