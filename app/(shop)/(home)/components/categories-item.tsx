import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItems = ({ category }: CategoryItemsProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex w-full items-center justify-center gap-2 rounded-lg py-5"
      >
        <div>{CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}</div>
        <span className="text-sm font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItems;
