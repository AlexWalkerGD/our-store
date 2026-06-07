import { prismaClient } from "@/lib/prisma";

import { Progress } from "@/components/ui/progress";

const CategoriesList = async () => {
  const categories = await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });
  return (
    <div className="py-5">
      {categories.map((categories) => (
        <div key={categories.id} className="flex flex-col gap-1 pb-4">
          <div className="flex flex-row justify-between">
            <p className="text-base">{categories.name}</p>
            <p className="text-base font-semibold">33%</p>
          </div>
          <Progress value={33} className="h-5" />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
