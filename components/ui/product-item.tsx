import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="bg-accent relative flex aspect-square w-full items-center justify-center rounded-lg">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute top-3 left-3">
            <ArrowDownIcon size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{product.name}</p>

        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="truncate font-semibold lg:text-lg">
                € {product.totalPrice.toFixed(2)}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                € {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="truncate text-sm font-semibold lg:text-lg">
              € {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
