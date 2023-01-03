import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./credentials.json", "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const data = admin.firestore();

class Manager {
    constructor(tabla) {
        this._data = data;
        this._tabla = tabla;;
    }

    async create (params, url) {
        const rta = await this_.data.collection(this._tabla).add(params);
        return { status: "OK", message: "Product Create"};
    }

    async getAll(){
        const list = [];
        const data = await this_.data.collection(this._tabla).get();
        const result = data.forEach((doc) => list.push({id: doc.id, ...doc.data()}));
        return list;
    }

    async getById (id) {
        const data = await this._data.collection(this._tabla).doc(id).get();
        return { ...data.data(), id: data.id };
    }

    async updateById (id, params) {
        const data = await this._data.collection(this._tabla).doc(id).update(params);
        return { ...data.data(), id: data.id};
        
    }
    async deleteById (id) {
        const data = await this._data.collection(this._tabla).doc(id);
        const boolean = await data.get();
        if (boolean.exists) {
            data.delete();
            return { status: "OK", message: "Product Delete"};
        } else {
            return { status: "ERROR", message: "Product Not Found"};
        }
    }
}

export default Manager;