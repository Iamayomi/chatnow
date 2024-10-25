import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

export default (sequelize) => {
	const User = sequelize.define("user", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: { isEmail: true },
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			validate: {
				min: 8,
			},
		},
		userCreatedAt: {
			type: DataTypes.DATE,
			defaultValue: Date.now(),
		},
	}, {
		timestamps: false,  // Disable automatic createdAt/updatedAt columns
	});

	User.beforeSave(async (user) => {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
	});

	User.comparePassword = async (signinPassword, userPassword) => {
		return await bcrypt.compare(signinPassword, userPassword);
	};

	return User;
};
