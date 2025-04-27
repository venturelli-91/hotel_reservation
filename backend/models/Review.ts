import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import Suite from "./Suite";

class Review extends Model {
	public id!: number;
	public suiteId!: number;
	public userName!: string;
	public rating!: number;
	public comment!: string;
	public userIp!: string;
}

Review.init(
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
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 1,
				max: 5,
			},
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		userIp: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Review",
		tableName: "reviews",
		timestamps: true,
	}
);

export default Review;
