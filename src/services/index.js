import { user } from './users/user.js'

export const services = (app) => {
  app.configure(user)

  // All services will be registered here
  
}