// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
// import authentication from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'
import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'
// import { authenticate } from '@feathersjs/express';
import config from 'config';

export const authentication = (app) => {

  const authentication = new AuthenticationService(app);


  authentication.register('jwt', new JWTStrategy())
  authentication.register('local', new LocalStrategy())

  app.use('authentication', authentication)

  app.service("authentication").hooks({
    before: {
      all: [],
      find: [],
      get: [],
      // create: [authentication.hooks.authenticate("local")],
      patch: [],
      remove: []
    }
  })
  app.configure(oauth())
}
