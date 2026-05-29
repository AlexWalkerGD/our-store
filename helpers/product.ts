import { Product } from "@prisma/client";

type ProductPriceFields = {
  basePrice: unknown;
  discountPercent: number;
};

export type ProductWithTotalPrice<T extends ProductPriceFields = Product> =
  Omit<T, "basePrice"> & {
    basePrice: number;
    totalPrice: number;
  };

export const computeProductTotalPrice = <T extends ProductPriceFields>(
  product: T,
): ProductWithTotalPrice<T> => {
  const basePrice = Number(product.basePrice);

  if (product.discountPercent === 0) {
    return {
      ...product,
      basePrice,
      totalPrice: basePrice,
    };
  }

  const totalDiscount = basePrice * (product.discountPercent / 100);

  return {
    ...product,
    basePrice,
    totalPrice: basePrice - totalDiscount,
  };
};
