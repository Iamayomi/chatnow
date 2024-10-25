import MessageModel from './message.model.js';
import UserModel from './user.model.js';

export default function SyncDatabase(app){
    const sequelizeClient = app.get('sequelizeClient');
    const Message = MessageModel(sequelizeClient);
    const User = UserModel(sequelizeClient);

    User.hasMany(Message);
    Message.belongsTo(User);

    sequelizeClient.sync({ alter: true }).then(() => {
        console.log("Models synchronized with the database <<<<<<<<<<<<<>>>>>>>>>");
    }).catch((err) => {
        console.error("UNABLE to synchronize with the DATABASE", err);
    });

    app.set("sequelizeClient", sequelizeClient)

};

