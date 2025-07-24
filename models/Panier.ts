import { Model, DataTypes } from "sequelize";
import sequelize
 from "@/lib/sequelize";


 export class Panier extends Model{
    declare id: number;
    declare user_id: number;
    declare product_id: number;
    declare quantity: number;

}

Panier.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }

},{
    sequelize,
    modelName: 'Panier',
    tableName: 'Paniers',
    timestamps: false
})
