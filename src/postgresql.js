// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import { Sequelize } from 'sequelize'

export const postgresql = (app) => {
  const config = app.get('postgresql')

  const sequelize = new Sequelize(config.connection, { dialect: 'postgres' })
  sequelize.authenticate().then(()=> {
      console.log("Database successfully connted <<<<<<<<<<<<<>>>>>>>>>");
  }).catch((err) => {
    console.error("UNABLE to synchronize with the DATABASE", err);
  });

  app.set('sequelizeClient', sequelize)
}
