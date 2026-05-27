import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.length > 0 ? (
        products.map((product) => (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <div key={product.id} className="flex flex-col gap-5">
            <CartItem
              product={computeProductTotalPrice(product as any) as any}
            />
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
            </div>
          </div>
        ))
      ) : (
        <p className="mt-5 flex justify-center text-justify text-sm italic opacity-60">
          Você ainda não possui itens no carrinho.
        </p>
      )}
    </div>
  );
};

export default Cart;
