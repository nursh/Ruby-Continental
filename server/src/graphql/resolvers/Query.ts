import { getConnection } from "typeorm";


import { MenuItem } from "../../entity/MenuItem";
import { Order } from '../../entity/Order';
import "../../db";


const Query = {
  name: () => "Nuradeen Sheikh",
  menuItems: async (_: any, args: any) => {
    const menuRepo = getConnection().getRepository(MenuItem);
    const menuItems = await menuRepo.find();
    return menuItems;
  },
  order: async (_: any, args: any) => {
    const { id } = args;
    const orderRepo = getConnection().getRepository(Order);
    const order = await orderRepo.findOne(id);
    return order;
  }
};

export default Query;
