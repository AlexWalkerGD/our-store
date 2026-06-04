import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-background border-accent flex min-w-75 flex-col items-center gap-8 border-r border-solid p-5">
      <h1 className="text-lg font-semibold">
        <span className="text-primart">Our</span> Store
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Button className="flex w-full justify-start gap-2" variant="outline">
          <LayoutDashboardIcon size={16} />
          Dashboard
        </Button>
        <Button className="flex w-full justify-start gap-2" variant="outline">
          <PackageIcon size={16} />
          Produtos
        </Button>
        <Button className="flex w-full justify-start gap-2" variant="outline">
          <ListOrderedIcon size={16} />
          Categorias
        </Button>
        <Button className="flex w-full justify-start gap-2" variant="outline">
          <PackageSearchIcon size={16} />
          Pedidos
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
