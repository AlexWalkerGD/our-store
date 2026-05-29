"use server";

import Stripe from "stripe";

interface CheckoutProduct {
  name: string;
  description: string;
  imageUrls: string[];
  totalPrice: number;
  quantity: number;
}

export const createCheckout = async (
  products: CheckoutProduct[],
  orderId: string,
) => {
  if (products.length === 0) {
    throw new Error("Carrinho vazio.");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: Math.round(product.totalPrice * 100),
        },
        quantity: product.quantity,
      };
    }),
  });

  if (!checkout.url) {
    throw new Error("Não foi possí­vel criar a URL do checkout.");
  }

  return {
    checkoutUrl: checkout.url,
  };
};
