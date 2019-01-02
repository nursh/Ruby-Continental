import { getConnection } from "typeorm";

import { MenuItem } from "../../entity/MenuItem";
import { Order } from "../../entity/Order";
import { OrderItem } from "../../entity/OrderItem";
import "../../db";

export default {
  createOrder: async () => {
    const orderRepo = getConnection().getRepository(Order);
    const newOrder = orderRepo.create();
    const insertedOrder = await orderRepo.save(newOrder);
    return insertedOrder;
  },
  deleteOrder: async (_: any, { id }: any) => {
    const orderRepo = getConnection().getRepository(Order);
    const order = await orderRepo.delete(id);
    const { affectedRows } = order.raw;
    if (affectedRows === 1) return true;
    return false;
  },
  createMenuItem: async (_: any, { data }: any) => {
    const menuRepo = getConnection().getRepository(MenuItem);
    const { name, price, category } = data;
    const newItem = menuRepo.create({ name, price, category });
    const insertedItem = await menuRepo.save(newItem);
    return insertedItem;
  },
  createOrderItem: async (_: any, { data }: any) => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const { name, price, quantity, order } = data;
    const newOrderItem = orderItemRepo.create({ name, price, quantity, order });
    const insertedOrderItem = await orderItemRepo.save(newOrderItem);
    return insertedOrderItem;
  }
};
