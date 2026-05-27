import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);
  const { increaseProductQuantity } = useContext(CartContext);

  const handleDescreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-accent flex h-[77px] w-[77px] items-center justify-center rounded-lg">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{product.totalPrice.toFixed(2)}</p>
            {product.discountPercent > 0 && (
              <p className="text-xs line-through opacity-75">
                € {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={handleDescreaseProductQuantityClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>

            <span>{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartItem;
