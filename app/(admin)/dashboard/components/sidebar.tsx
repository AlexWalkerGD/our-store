"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex min-w-[300px] flex-col items-center gap-8 border-r border-solid border-gray-400 p-5">
      <h1 className="text-lg font-semibold">
        <span className="text-primart">Our</span> Store
      </h1>
      <div className="flex w-full flex-col gap-3">
        <Button className="flex w-full justify-start gap-2" variant="outline">
          <LayoutDashboardIcon size={16} />
          Dashboard
        </Button>
        <Link href="/dashboard/products">
          <Button
            variant="outline"
            className={`gap-2" flex w-full justify-start ${path.includes("/products") && "bg-primary hover:bg-primary text-white"}`}
          >
            <PackageIcon size={16} />
            Produtos
          </Button>
        </Link>
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
