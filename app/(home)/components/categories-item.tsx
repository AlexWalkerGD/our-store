import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItems = ({ category }: CategoryItemsProps) => {
  return (
    <Badge
      variant="outline"
      className="flex w-full items-center justify-center gap-2 rounded-lg py-5"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-sm font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItems;
