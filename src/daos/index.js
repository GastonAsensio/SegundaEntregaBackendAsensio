import dotenv from 'dotenv';
import { ProductDaoMongo } from "./productos/productos.dao.mongodb.js"
import { ProductDaoFirebase } from "./productos/productos.dao.firestore.js"
import { CartDaoFirebase } from "./productos/productos.dao.firestore.js"
import { CartDaoMongo } from "./productos/productos.dao.mongodb.js"

dotenv.config();

let productDao;
let cartDao;

switch (process.env.VARIABLE_ENTORNO) {
    case 'mongo':
        productDao = ProductDaoMongo;
        cartDao = CartDaoMongo;
        import ("../config/db.remote.config.js").then((mod) => mod.init());
        break;
    case 'firebase':
        productDao = ProductDaoFirebase;
        cartDao = CartDaoFirebase;
        break;

        default:
            break;
}

export default {
    productDao,
    cartDao}