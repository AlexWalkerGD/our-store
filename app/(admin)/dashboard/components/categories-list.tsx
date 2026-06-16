import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryListProps {
  category: string;
  quantity: number;
  percentage: number;
}
interface CategoryListChartProps {
  results: CategoryListProps[];
}

const CategoriesList = async ({ results }: CategoryListChartProps) => {
  return (
    <ScrollArea>
      <div className="py-5">
        {results.map((result) => (
          <div key={result.category} className="flex flex-col gap-1 pb-4">
            <div className="flex flex-row justify-between">
              <p className="text-base">{result.category}</p>
              <p className="text-base font-semibold">{result.percentage}%</p>
            </div>
            <Progress value={result.percentage} className="h-5" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoriesList;
