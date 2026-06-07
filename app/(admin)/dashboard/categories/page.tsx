import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { ListOrderedIcon, PackageIcon, PlusIcon } from "lucide-react";

const CategoriesPage = async () => {
  const categories = prismaClient.category.findMany({});

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 p-5">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <ListOrderedIcon />
        Categorias
      </Badge>

      <div className="flex w-full items-center justify-between p-4">
        <p className="text-lg font-bold">Categorias encontradas:</p>

        <Button className="flex gap-2">
          <PlusIcon size={16} />
          Adicionar categoria
        </Button>
      </div>
    </div>
  );
};

export default CategoriesPage;
