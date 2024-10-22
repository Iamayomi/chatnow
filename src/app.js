// // For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import feathers from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import socketio from '@feathersjs/socketio'
import configuration from "@feathersjs/configuration"
import connectDB  from './sequelize.js'
// import hooks from './hooks.js'
// import userModel from "./models/index.js"
// import { authentication } from './authentication.js'

const app = express(feathers())

app.configure(configuration());

// Load app configuration
app.use(cors())
app.use(json())


app.use(urlencoded({ extended: true }))
// Host the public folder
// app.use('/', serveStatic(app.get('public')))

// Configure services and real-time functionality
app.configure(rest())
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
)
// app.configure(authentication)
app.configure(connectDB)
// app.configure(setupModels)

// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler())
// app.hooks(hooks);


app.use(errorHandler());


export default app;
