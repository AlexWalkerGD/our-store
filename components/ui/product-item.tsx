import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-accent relative flex h-[170px] w-full items-center justify-center rounded-lg">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h[90px] max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
          alt={product.name}
        />
        {product.discountPercent > 0 && (
          <Badge className="absolute top-3 left-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">€ {product.totalPrice.toFixed(2)}</p>
              <p className="text-xs line-through opacity-75">
                € {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-xs line-through opacity-75">
              € {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
