import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = async ({ product, className }: ProductItemProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex gap-3">
        <div className="bg-accent flex h-24 w-40 items-center justify-center rounded-xl">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            alt={product.name}
          />
        </div>
        <div className="flex h-full w-full flex-col">
          <Badge
            className="border-primary text-primary w-fit gap-2 border-2 px-3 py-3 text-sm"
            variant="outline"
          >
            Mouses
          </Badge>
          <p className="text-lg">{product.name}</p>
          <p className="text-xl font-bold">
            €{product.totalPrice.toFixed(2)}{" "}
            <span className="truncate text-base line-through opacity-75">
              € {product.basePrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="text-lg font-bold">300 vendidos</p>
      </div>
    </div>
  );
};

export default ProductItem;
