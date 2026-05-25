import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItems = ({ category }: CategoryItemsProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={20} />,
    monitors: <MonitorIcon size={20} />,
    headphones: <HeadphonesIcon size={20} />,
    mousepads: <SquareIcon size={20} />,
    speakers: <SpeakerIcon size={20} />,
    mouses: <MouseIcon size={20} />,
  };
  return (
    <Badge
      variant="outline"
      className="flex w-full items-center justify-center gap-2 rounded-lg py-5"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-sm font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItems;
