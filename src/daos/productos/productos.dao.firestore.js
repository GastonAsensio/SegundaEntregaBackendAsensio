import Manager from "../../controllers/manager.firestore.js";

export default class ProductDaoFirestore extends Manager {

    constructor(tabla) {
        super("productos");
}
}