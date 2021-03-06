import { getConnection } from "typeorm";

import { MenuItem } from "../../entity/MenuItem";
import { Order } from "../../entity/Order";
import { OrderItem } from "../../entity/OrderItem";
import { Category } from "../../entity/Category";
import { Payment } from '../../entity/Payment';

import "../../db";

export default {
  menuItem: async (_: any, args: any) => {
    const { id } = args;
    const menuRepo = getConnection().getRepository(MenuItem);
    const menuItem = await menuRepo.findOne(id);
    return menuItem;
  },
  menuItems: async (_: any, args: any) => {
    const { category } = args;
    const menuRepo = getConnection().getRepository(MenuItem);
    if (category) {
      const menuItems = await menuRepo.find({ category });
      return menuItems;
    }
    const menuItems = await menuRepo.find();
    return menuItems;
  },
  order: async (_: any, args: any) => {
    const { id } = args;
    const orderRepo = getConnection().getRepository(Order);
    const order = await orderRepo.findOne(id);
    return order;
  },
  orders: async (_: any, args: any) => {
    const orderRepo = getConnection().getRepository(Order);
    const orders = await orderRepo.find();
    return orders;
  },
  orderItem: async (_: any, args: any) => {
    const { id } = args;
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const orderItem = await orderItemRepo.findOne(id, { relations: ["order"] });
    return orderItem;
  },
  orderItems: async (_: any, args: any) => {
    const orderItemRepo = getConnection().getRepository(OrderItem);
    const orderItems = await orderItemRepo.find({ relations: ["order"] });
    return orderItems;
  },
  categories: () => {
    const categories = Object.keys(Category).filter(k => typeof Category[k as any] === "number"); 
    return categories;
  },
  payments: async () => {
    const paymentRepo = getConnection().getRepository(Payment);
    const payments = await paymentRepo.find({ relations: ["order"] });
    return payments;
  }
};
