"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDescreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    toast.success("Adicionado ao carrinho com sucesso!", {
      position: "top-center",
    });
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="lg:bg-accent flex flex-col px-5 lg:w-[40%] lg:rounded-lg lg:p-10">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold lg:text-3xl">
          € {Number(product.totalPrice).toFixed(2)}{" "}
        </h1>
        {product.discountPercent > 0 && (
          <Badge className="px-2 py-[2px] lg:text-base">
            <ArrowDownIcon size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75 lg:text-base">
          € {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDescreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <Button className="font-bold uppercase" onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </Button>

        <div className="bg-accent flex items-center justify-between rounded-lg px-5 py-2 lg:bg-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <TruckIcon />

            <div className="flex flex-col">
              <p className="text-xs">
                Entrega via <span className="font-bold">Correios</span>
              </p>
              <p className="text-primary text-xs">
                Envio para <span className="font-bold">Portugal</span>
              </p>
            </div>
          </div>

          <p className="text-xs font-bold">Porte Grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
