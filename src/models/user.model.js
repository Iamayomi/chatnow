import { DataTypes } from "sequelize";

export default function (app) {
    const sequelizeClient = app.get("sequelizeClient");
    const users = sequelizeClient.define("users", {
        firstName: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true },
            unique: true,
        },

        lastName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        githubId: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,
            // allowNull: false,
        },

    })

    return users;
}