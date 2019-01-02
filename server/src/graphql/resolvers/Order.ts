import { getConnection } from "typeorm";

import { OrderItem } from "../../entity/OrderItem";
import { Order } from "../../entity/Order";

export default {
  items: async ({ id }: any) => {
    const orderRepo = getConnection().getRepository(Order);
    const orderItemRepo = getConnection().getRepository(OrderItem);

    const order = await orderRepo.findOne(id, { select: ["id"] });
    const items = await orderItemRepo.find({ where: { order } });

    return items;
  }
};
