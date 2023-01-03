import Manager from "../../controllers/manager.mongodb.js";
import { productSchema } from "../../models/productos.model.js";

export class ProductDaoMongo extends Manager {
    constructor() {
        super(productSchema);
    }
}