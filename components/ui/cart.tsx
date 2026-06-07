"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/app/(shop)/actions/checkout";
import { useSession } from "next-auth/react";
import { createOrder } from "@/app/(shop)/actions/order";

const Cart = () => {
  const { data } = useSession();
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      return;
    }

    if (products.length === 0 || isCreatingCheckout) {
      return;
    }

    setIsCreatingCheckout(true);
    setCheckoutError(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const order = await createOrder(products, (data.user as any).id);

    try {
      const checkout = await createCheckout(
        products.map((product) => ({
          name: product.name,
          description: product.description,
          imageUrls: product.imageUrls,
          totalPrice: product.totalPrice,
          quantity: product.quantity,
        })),
        order.id,
      );

      window.location.assign(checkout.checkoutUrl);
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Não foi possí­vel iniciar o checkout.",
      );
      setIsCreatingCheckout(false);
    }
  };

  return (
    <div className="flex h-full flex-col gap-8 p-5">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={{
                    ...product,
                    totalPrice: computeProductTotalPrice(product),
                  }}
                />
              ))
            ) : (
              <p className="mt-5 flex justify-center text-justify text-sm italic opacity-60">
                Você ainda não possui itens no carrinho.
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-sm">
            <p>Subtotal</p>
            <p>€ {subTotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm">
            <p>Porte</p>
            <p>Grátis</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm">
            <p>Descontos</p>
            <p>- € {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-base font-bold">
            <p>Total</p>
            <p>€ {total.toFixed(2)}</p>
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            disabled={products.length === 0 || isCreatingCheckout}
            onClick={handleFinishPurchaseClick}
          >
            {isCreatingCheckout ? "Redirecionando..." : "Finalizar compra"}
          </Button>
          {checkoutError && (
            <p className="text-destructive text-center text-sm">
              {checkoutError}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
