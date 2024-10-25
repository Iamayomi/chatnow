import { authenticate } from '@feathersjs/authentication';
// import {  protect } from "@feathersjs/authentication-local"
import { UserService, getOptions } from './user.class.js';
import { userPath, userMethods } from './user.shared.js';
import userModel from './user.model.js';



export const user = (app) => {
  const sequelizeClient = app.get('sequelizeClient');
  const usermodel = userModel(sequelizeClient);

  app.use(userPath, new UserService(getOptions(app), usermodel), {
    methods: userMethods
  });

  // Initialize hooks
  app.service(userPath).hooks({
    around: {
      // all: [async (context) => {
      //   console.error('Error occurred:', context.error);
      //   throw new Error('An error occurred during the request.')
      // }],
      // find: [authenticate('jwt')],
      // get: [authenticate('jwt')],
      // create: [],
      // patch: [authenticate('jwt')],
      // remove: [authenticate('jwt')]
    },
    // before: {
    //   find: [authenticate('jwt')],
    //   get: [authenticate('jwt')],
    //   create: [],
    //   patch: [authenticate('jwt')],
    //   remove: [authenticate('jwt')]
    // },
    after: {
      all: [],
    },
    error: {
      all: [],
    }
  });

  // app.use('/users', new CustomAuthenticationService(app, options));

};
