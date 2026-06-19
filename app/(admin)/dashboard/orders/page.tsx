import OrderItem from "@/components/order-item";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";

const OrderPage = async () => {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Acesso Negado</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col gap-4 p-5">
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

      <div className="flex w-full overflow-hidden">
        <ScrollArea className="w-full">
          <div className="flex w-full flex-col gap-5 p-2 pt-5">
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default OrderPage;
