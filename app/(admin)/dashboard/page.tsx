/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = async () => {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Acesso Negado</p>;
  }

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

  const totalProducts = () => {
    return orders.reduce((orderAcc, order) => {
      const orderTotal = order.orderProducts.reduce((productAcc, product) => {
        return product.quantity;
      }, 0);

      return orderAcc + orderTotal;
    }, 0);
  };

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  const totalSales = () => {
    return orders.reduce((orderAcc, order) => {
      const orderTotal = order.orderProducts.reduce((productAcc, product) => {
        const productTotalPrice = computeProductTotalPrice(product.product);

        return productAcc + productTotalPrice * product.quantity;
      }, 0);

      return orderAcc + orderTotal;
    }, 0);
  };

  const totalSalesToday = () => {
    const today = new Date();

    return orders
      .filter((order) => {
        const orderDate = new Date(order.createdAt);

        return (
          orderDate.getDate() === today.getDate() &&
          orderDate.getMonth() === today.getMonth() &&
          orderDate.getFullYear() === today.getFullYear()
        );
      })
      .reduce((orderAcc, order) => {
        const orderTotal = order.orderProducts.reduce((productAcc, product) => {
          return (
            productAcc +
            computeProductTotalPrice(product.product) * product.quantity
          );
        }, 0);

        return orderAcc + orderTotal;
      }, 0);
  };

  const salesByCategory: Record<string, number> = {};

  for (const order of orders) {
    for (const item of order.orderProducts) {
      const categoryName = item.product.category.name;

      salesByCategory[categoryName] =
        (salesByCategory[categoryName] || 0) + item.quantity;
    }
  }

  const salesByProduct: Record<string, number> = {};

  for (const order of orders) {
    for (const item of order.orderProducts) {
      const productName = item.product.name;

      salesByProduct[productName] =
        (salesByProduct[productName] || 0) + item.quantity;
    }
  }

  const sortedItems = Object.entries(salesByProduct).sort(
    ([, a], [, b]) => b - a,
  );

  const productMap = new Map();

  for (const order of orders) {
    for (const item of order.orderProducts) {
      productMap.set(item.product.name, item);
    }
  }

  const totalSalesByCategory = Object.values(salesByCategory).reduce(
    (acc, value) => acc + value,
    0,
  );

  const result = Object.entries(salesByCategory)
    .map(([category, quantity]) => ({
      category,
      quantity,
      percentage: Math.round(Number((quantity / totalSalesByCategory) * 100)),
    }))
    .sort((a, b) => b.quantity - a.quantity);

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
          <h1 className="text-4xl font-bold">€ {totalSales().toFixed(2)}</h1>
        </div>
        <div className="flex h-[150px] w-[650px] w-full flex-col justify-center rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#2c2c2c4f] p-5 pl-10">
          <div className="flex items-center gap-1">
            <DollarSign size={20} />
            <p>Receita hoje</p>
          </div>
          <h1 className="text-4xl font-bold">{totalSalesToday().toFixed(2)}</h1>
        </div>
      </div>

      <div className="flex w-full flex-row gap-10">
        <div className="border-accent flex w-full flex-col items-center gap-1 rounded-xl border-2 p-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <CircleDollarSign size={20} className="text-primary" />
            <p className="text-2xl font-bold">{totalProducts()}</p>
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

      <div className="flex w-full flex-row gap-5 overflow-hidden">
        <ScrollArea className="border-accent w-full rounded-xl border-2">
          <div className="border-accent flex w-full flex-col gap-5 overflow-hidden p-5">
            <h1 className="text-xl font-bold">Produtos mais vendidos</h1>

            <div className="flex flex-col gap-10 overflow-hidden">
              {" "}
              {sortedItems.map(([productName]) => {
                const item = productMap.get(productName);

                if (!item) return null;

                return (
                  <ProductItem
                    key={item.id}
                    product={{
                      ...item.product,
                      totalPrice: computeProductTotalPrice(item.product),
                    }}
                    category={item.product.category.name}
                    totalSalesByProduct={salesByProduct}
                  />
                );
              })}
            </div>
          </div>
        </ScrollArea>
        <div className="flex w-full flex-row overflow-hidden">
          <div className="border-accent w-full rounded-xl border-2 p-5">
            <h1 className="text-xl font-bold">Categorias mais vendidas</h1>
            <CategoriesList results={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
