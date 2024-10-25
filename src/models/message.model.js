import { DataTypes } from "sequelize";

export default (sequelize) => {
	const Message = sequelize.define("message", {
		text: {
			type: DataTypes.STRING,
		},
		messageCreatedAt: {
			type: DataTypes.DATE,
			defaultValue: Date.now(),
		},
	}, {
		timestamps: false,  // Disable automatic createdAt/updatedAt columns
	});

	return Message;
};
