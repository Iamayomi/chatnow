
import Sequelize from "sequelize";
import userModel from "./models/user.model.js";


export default function(app) {

  const connection = app.get('postgresql');

  const sequelize = new Sequelize(connection.connection, { dialect: "postgres" })

  const models = {
    User: userModel(sequelize, Sequelize.DataTypes)
  };

  sequelize.sync({ alter: true })
    .then(() => {
      console.log("Models synchronized with the database <<<<<<<<<<<<<>>>>>>>>>");
    })
    .catch((err) => {
      console.error("UNABLE to synchronize with the DATABASE", err);
    });

  app.set("sequelizeClient", sequelize);
  app.set("models", models);

};