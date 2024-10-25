import { authenticate } from '@feathersjs/authentication';
// import {  protect } from "@feathersjs/authentication-local"
import { MessageService, getOptions } from './message.class.js';
import { messagePath, messageMethods } from './message.shared.js';


export const message = (app) => {
  const {message} = app.get('sequelizeClient').models;
 
  app.use(messagePath, new MessageService(getOptions(app), message), {
    methods: messageMethods
  });

  // Initialize hooks
  app.service(messagePath).hooks({
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
