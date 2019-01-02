import { getConnection } from "typeorm";

import { MenuItem } from "../../entity/MenuItem";
import { Order } from "../../entity/Order";
import { OrderItem } from "../../entity/OrderItem";
import "../../db";

export default {
  createOrder: async (): Promise<Order> => {
    const orderRepo = getConnection().getRepository(Order);
    const newOrder = orderRepo.create();
    const insertedOrder = await orderRepo.save(newOrder);
    return insertedOrder;
  },
  deleteOrder: async (_: any, { id }: any): Promise<Boolean> => {
    const orderRepo = getConnection().getRepository(Order);
    const order = await orderRepo.delete(id);
    const { affectedRows } = order.raw;
    if (affectedRows === 1) return true;
    return false;
  },
  createMenuItem: async (_: any, { data }: any): Promise<MenuItem> => {
    const menuRepo = getConnection().getRepository(MenuItem);
    const { name, price, category } = data;
    const newItem = menuRepo.create({ name, price, category });
    const insertedItem = await menuRepo.save(newItem);
    return insertedItem;
  },
  deleteMenuItem: async (_: any, { id }: any): Promise<Boolean> => {
    const menuItemRepo = getConnection().getRepository(MenuItem);
    const menuItem = await menuItemRepo.delete(id);
    const { affectedRows } = menuItem.raw;
    if (affectedRows === 1) return true;
    return false;
  },
  createOrderItem: async (_: any, { data }: any): Promise<OrderItem> => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const { name, price, quantity, order } = data;
    const newOrderItem = orderItemRepo.create({ name, price, quantity, order });
    const insertedOrderItem = await orderItemRepo.save(newOrderItem);
    return insertedOrderItem;
  },
  deleteOrderItem: async (_: any, { id }: any): Promise<Boolean> => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const orderItem = await orderItemRepo.delete(id);
    const { affectedRows } = orderItem.raw;
    if (affectedRows === 1) return true;
    return false;
  }
};
