import sequelize from "@/lib/sequelize";
import { DataTypes, Model } from "sequelize";


export class Product extends Model{

    declare id: number;
    declare name: string;
    declare price: number;
    declare description: string;
    declare image?: string;
    declare stock: number;
    declare category?: string;

}

Product.init({

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.STRING(500),
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    category: {
        type: DataTypes.STRING,
    },
    

},{
    sequelize,
    modelName: 'Product',
    tableName: 'Produits',
    timestamps: false

})
