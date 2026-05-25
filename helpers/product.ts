import { Product } from "@prisma/client";

interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

const computeProductTotalPrice = (product: Product) => {
  if (product.discountPercent === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalPrice =
    Number(product.basePrice) * (product.discountPercent / 100);

  return {
    ...product,
    totalPrice,
  };
};
