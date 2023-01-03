import Manager from "../../controllers/manager.mongodb.js";
import { cartSchema } from "../../models/carritos.model.js"

export class CarritosDaoMongo extends Manager {
    constructor() {
        super(cartSchema);
}
}