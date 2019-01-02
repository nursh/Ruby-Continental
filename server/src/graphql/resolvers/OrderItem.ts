import { getConnection } from "typeorm";

import { OrderItem } from "../../entity/OrderItem";
import { Order } from "../../entity/Order";

export default {
  order: async ({ id }: any) => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const orderRepo = getConnection().getRepository(Order);
    const orderId = await orderItemRepo.findOne(id, { select: ["order"] });
    const order = await orderRepo.findOne(orderId);
    return order;
  }
};
