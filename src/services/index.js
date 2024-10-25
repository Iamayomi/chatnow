import { user } from './users/user.js'
import { message } from './messages/message.js'


export const services = (app) => {
  app.configure(user)
  app.configure(message)


  // All services will be registered here
  
}
