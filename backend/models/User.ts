import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import bcrypt from "bcrypt";

class User extends Model {
	public id!: number;
	public email!: string;
	public username!: string;
	public password!: string;
	public role!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	public async validPassword(password: string): Promise<boolean> {
		return await bcrypt.compare(password, this.password);
	}

	static async authenticate(username: string, password: string): Promise<User> {
		const user = await User.findOne({ where: { username } });

		if (!user) {
			throw new Error("Usuário não encontrado");
		}

		const isPasswordValid = await user.validPassword(password);

		if (!isPasswordValid) {
			throw new Error("Senha incorreta");
		}

		return user;
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM("admin", "user"),
			defaultValue: "user",
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "users",
		hooks: {
			beforeCreate: async (user: any) => {
				if (user.password) {
					const salt = await bcrypt.genSalt(10);
					user.password = await bcrypt.hash(user.password, salt);
				}
			},
			beforeUpdate: async (user: any) => {
				if (user.changed("password")) {
					const salt = await bcrypt.genSalt(10);
					user.password = await bcrypt.hash(user.password, salt);
				}
			},
		},
	}
);

export default User;
