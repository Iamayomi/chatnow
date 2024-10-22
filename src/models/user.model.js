
export default function (sequelize, DataTypes) {

    const User = sequelize.define("users", {
        
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

    return User;
}