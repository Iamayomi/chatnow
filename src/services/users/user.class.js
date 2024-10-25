import { SequelizeService } from 'feathers-sequelize';

export class UserService extends SequelizeService {
  constructor(options, model) {
    super({
      ...options,
      Model: model, // Pass the model directly here
    });
  }

  async create(data, params) {
    const { username, email, password } = data;

    // Basic validation for email and password
    if (!email || !password) {
      throw new BadRequest('Email and password are required');
    }

    // Call the default create method of SequelizeService to save the user
    const user = await super.create(data, params);

    console.log('User created:', user); // Optionally log the created user

    return user; // Return the created user object
  }

  async patch(id, data, params) {
    const {password, ...options} = data;

    // Basic validation for email and password
    if (!password) {
      throw new BadRequest('Email and password are required');
    }

    // Call the default create method of SequelizeService to save the user
    const userPassword = await super.patch(id, options, params);

    console.log('User password updated:', userPassword); // Optionally log the created user

    return userPassword; // Return the created user object
  }

}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),  // pagination settings
    Model: app.get('sequelizeClient').models.User,  // attach User model here
  };
};
