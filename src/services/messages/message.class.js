import { SequelizeService } from 'feathers-sequelize';
import { query } from 'winston';

export class MessageService extends SequelizeService {
  constructor(options, model) {
    super({
      ...options,
      Model: model, // Pass the model directly here
    });
  }

  async create(data, params) {
    const {id, text } = data;

    console.log(data, params )

    if(params.user){
      data.userId = params.id;
    }
    // Call the default create method of SequelizeService to save the user
    const sendMessage = await super.create(data, params);

    console.log('User created:', sendMessage); // Optionally log the created user

    return sendMessage; // Return the created user object
  }


}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),  // pagination settings
    Model: app.get('sequelizeClient').models.Message,  // attach User model here
  };
};
