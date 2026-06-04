import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { PackageIcon, PlusIcon } from "lucide-react";

const ProductsPage = async () => {
  const products = await prismaClient.product.findMany();

  return (
    <div className="flex flex-col gap-10 p-5">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <PackageIcon />
        Produtos
      </Badge>

      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">
          Productos encontrados: {products.length}
        </p>

        <Button className="flex gap-2">
          <PlusIcon size={16} />
          Adicionar producto
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
