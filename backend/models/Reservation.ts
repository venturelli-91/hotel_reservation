import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Reservation extends Model {
	public id!: number;
	public suiteId!: number;
	public checkIn!: string;
	public checkOut!: string;
	public guests!: number;
	public userIp!: string;
	public status!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Reservation.init(
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
				model: "suites",
				key: "id",
			},
		},
		checkIn: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		checkOut: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		guests: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		userIp: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM("confirmada", "cancelada", "pendente"),
			defaultValue: "pendente",
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Reservation",
		tableName: "reservations",
		timestamps: true,
	}
);

export default Reservation;
