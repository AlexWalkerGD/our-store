import OrderItem from "@/components/order-item";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";

const OrderPage = async () => {
  const orders = await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 p-5">
      <Badge
        className="border-primary w-fit gap-2 border-2 px-3 py-4 text-base uppercase"
        variant="outline"
      >
        <PackageSearchIcon />
        Pedidos
      </Badge>

      <div className="flex w-full items-center justify-between p-4">
        <p className="text-lg font-bold">
          Pedidos encontrados: {orders.length}
        </p>
      </div>

      <div className="flex h-full flex-col gap-4 overflow-auto">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
