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
  updateOrder: async (_: any, { id, data }: any): Promise<Boolean> => {
    const orderRepo = getConnection().getRepository(Order);
    const updatedOrder = await orderRepo.update(id, { total: data.total });
    const { affectedRows } = updatedOrder.raw;
    if (affectedRows === 1) return true;
    return false;
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
  updateMenuItem: async (_: any, { id, data}: any): Promise<Boolean> => {
    const menuItemRepo = getConnection().getRepository(MenuItem);
    const updatedMenuItem = await menuItemRepo.update(id, { ...data });
    const { affectedRows } = updatedMenuItem.raw;
    if (affectedRows === 1) return true;
    return false;
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
  updateOrderItem: async (_: any, { id, data}: any): Promise<Boolean> => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const updatedOrderItem = await orderItemRepo.update(id, { ...data });
    const { affectedRows } = updatedOrderItem.raw;
    if (affectedRows === 1) return true;
    return false;
  },
  deleteOrderItem: async (_: any, { id }: any): Promise<Boolean> => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const orderItem = await orderItemRepo.delete(id);
    const { affectedRows } = orderItem.raw;
    if (affectedRows === 1) return true;
    return false;
  }
};
