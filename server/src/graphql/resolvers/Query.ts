import { getConnection } from "typeorm";


import { MenuItem } from "../../entity/MenuItem";
import "../../db";


const Query = {
  name: () => "Nuradeen Sheikh",
  menuItems: async (_: any, args: any) => {
    const menuRepo = getConnection().getRepository(MenuItem);
    const menuItems = await menuRepo.find();
    return menuItems;
  }
};

export default Query;
