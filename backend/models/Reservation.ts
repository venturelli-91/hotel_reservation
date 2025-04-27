import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Reservation extends Model {
	public id!: number;
	public suiteId!: number;
	public nomeCompleto!: string;
	public email!: string;
	public telefone!: string;
	public dataEntrada!: string;
	public dataSaida!: string;
	public qtdPessoas!: number;
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
		},
		nomeCompleto: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dataEntrada: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dataSaida: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		qtdPessoas: {
			type: DataTypes.INTEGER,
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
