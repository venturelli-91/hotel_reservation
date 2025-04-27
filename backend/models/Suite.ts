import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Suite extends Model {
	public id!: number;
	public name!: string;
	public type!: string;
	public description!: string;
	public price!: number;
	public capacity!: number;
	public features!: string[];
	public images!: string[];
}

Suite.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		capacity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		features: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
		images: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Suite",
		tableName: "suites",
		timestamps: true,
	}
);

export default Suite;
