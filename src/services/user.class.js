
import { NotFound } from "@feathersjs/errors";
import {Service} from "feathers-sequelize";

// This is a skeleton for a custom service class. Remove or add the methods you need here
export default class UserService extends Service {
  constructor(app) {
    this.app = app;
    // this.Model = app.get("sequelizeClient").models.users;
  }

  async find(params) {
    return this.Model.findAll(params)
  }

  async get(id, _params) {
    const user = await this.Model.findByPk(id);
    if (!user) {
      throw new NotFound(`user with id ${id} is not found`);
    };
    return user;
  };

  async create(data, _params) {
    const user = await this.Model.create(data, _params);
    return user;
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id, data, _params) {
    const user = await this.Model.findByPk(id);

    if(!user){
      throw new NotFound(`user with id ${id} is not found`);
    };
    await user.update(data);
    return user;
  }

  async patch(id, data, _params) {
    const user = await this.Model.findByPk(id);

    if (!user) {
      throw new NotFound(`user with id ${id} is not found`);
    };
    await user.update(data);
    return user;
  }

  async remove(id, _params) {
    const user = await this.Model.findByPk(id);

    if (!user) {
      throw new NotFound(`user with id ${id} is not found`);
    };
    await user.destroy();
    return user;
  }
}

export const getOptions = (app) => {
  return { app }
}
