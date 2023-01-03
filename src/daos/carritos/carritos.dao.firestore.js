import Manager from "../../controllers/manager.firestore.js";

export class CartDaoFirestore extends Manager {
    constructor(tabla) {
            super();
            this.collection = "carts";
        }
    }