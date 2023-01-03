import "../config/db.remote.config.js"

class Manager {
    constructor(tabla) {
        this._tabla = tabla;
}

async create (params) {
    const item = new this._tabla(params)
    item.save();
    return {status: "OK", message: "Producto creado"};
}

async getAll () {
    return await this._tabla.find();
}

async getById (id) {
    try {
        return await this._tabla.findById({_id: id});
    } catch (error) {
        return {status: "ERROR", message: "Error en busqueda por ID"}
};
}
async updateById (id, params) {
    try {
        return await this._tabla.updateById(id, {params})
    } catch (error) {console.log(error.message)}
}

async deleteById (id) {
try { return this._tabla.deleteById ({_id: id});
    } catch (error) { console.log(error.message)}
}
}

export default Manager;