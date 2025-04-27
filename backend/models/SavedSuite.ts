import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import Suite from "./Suite";

class SavedSuite extends Model {
	public id!: number;
	public suiteId!: number;
	public userIp!: string;
	public isSaved!: boolean;
}

SavedSuite.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		suiteId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Suite,
				key: "id",
			},
		},
		userIp: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isSaved: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		sequelize,
		modelName: "SavedSuite",
		tableName: "saved_suites",
		timestamps: true,
		indexes: [
			{
				unique: true,
				fields: ["suiteId", "userIp"],
			},
		],
	}
);

export default SavedSuite;
