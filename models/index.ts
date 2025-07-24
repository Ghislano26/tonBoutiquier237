import { Panier } from "./Panier";
import { Product } from "./Product";

Panier.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
})

export {Panier, Product};