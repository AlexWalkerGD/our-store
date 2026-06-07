import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Pick<Product, "discountPercent" | "basePrice">,
): number => {
  if (product.discountPercent === 0) {
    return Number(product.basePrice);
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercent / 100);

  return Number(product.basePrice) - totalDiscount;
};
