import sequelize from "@/lib/sequelize";
import { DataTypes, Model } from "sequelize";


export class User extends Model{
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false,
    }},


    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false
    }
)

export default User
