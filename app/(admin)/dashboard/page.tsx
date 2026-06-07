import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import {
  CircleDollarSign,
  DollarSign,
  Landmark,
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from "lucide-react";
import ProductItem from "./components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import CategoriesList from "./components/categories-list";

const Dashboard = async () => {
  const products = await prismaClient.product.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  const categories = await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });

  const orders = await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex w-full flex-col gap-4 p-5 px-10">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <LayoutDashboardIcon size={16} />
        Dashboard
      </Badge>

      <div className="flex w-full flex-row gap-10 py-10">
        <div className="flex h-[150px] w-[650px] w-full flex-col justify-center rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#2c2c2c4f] p-5 pl-10">
          <div className="flex items-center gap-1">
            <Landmark size={20} />
            <p>Total da Receita</p>
          </div>
          <h1 className="text-4xl font-bold">€ 20.000,00</h1>
        </div>
        <div className="flex h-[150px] w-[650px] w-full flex-col justify-center rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#2c2c2c4f] p-5 pl-10">
          <div className="flex items-center gap-1">
            <DollarSign size={20} />
            <p>Receita hoje</p>
          </div>
          <h1 className="text-4xl font-bold">€ 500,00</h1>
        </div>
      </div>

      <div className="flex w-full flex-row gap-10">
        <div className="border-accent flex w-full flex-col items-center gap-1 rounded-xl border-2 p-10">
          <div className="flex flex-row items-center justify-center gap-1">
            <CircleDollarSign size={20} className="text-primary" />
            <p className="text-2xl font-bold">1100</p>
          </div>
          Total de Vendidos
        </div>
        <div className="border-accent flex w-full flex-col items-center gap-1 rounded-xl border-2 p-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <PackageSearchIcon size={20} className="text-primary" />
            <p className="text-2xl font-bold"> {orders.length}</p>
          </div>
          Total de Pedidos
        </div>
        <div className="border-accent flex w-full flex-col items-center gap-1 rounded-xl border-2 p-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <PackageIcon size={20} className="text-primary" />
            <p className="text-2xl font-bold"> {products.length}</p>
          </div>
          Produtos
        </div>

        <div className="border-accent flex w-full flex-col items-center gap-1 rounded-xl border-2 p-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <ListOrderedIcon size={20} className="text-primary" />
            <p className="text-2xl font-bold"> {categories.length}</p>
          </div>
          Categorias
        </div>
      </div>

      <div className="flex w-full flex-row gap-5">
        <div className="border-accent flex w-full flex-col gap-5 rounded-xl border-2 p-5">
          <h1 className="text-xl font-bold">Produtos mais vendidos</h1>
          <div className="flex flex-col gap-10">
            {mouses.map((product) => (
              <ProductItem
                key={product.id}
                product={{
                  ...product,
                  totalPrice: computeProductTotalPrice(product),
                }}
                className="w-12"
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-row">
          <div className="border-accent w-full rounded-xl border-2 p-5">
            <h1 className="text-xl font-bold">Categorias mais vendidas</h1>
            <CategoriesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
