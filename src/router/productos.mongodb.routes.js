import { Router } from "express"
import { productDao } from "../daos/index.js"

const productDao = new ProductosDao();
const productRouter = Router()

productRouter.get("/", async (req, res) => {})

productRouter.get("/:id", async (req, res) => {
    let rta = await productDao.getById(req.params.id);
    rta.status === "error" ? res.status(400).send(rta.message) : res.send(rta)}
)

productRouter.post("/", async (req, res) => {
    res.send(await productDao.create(req.body))}
)

productRouter.put("/:id", async (req, res) => {
    res.send(await productDao.updateById(req.params.id, req.body))}
)

productRouter.delete("/:id", async (req, res) => {
    res.send(await productDao.deleteById(req.params.id))}
)

export default productRouter; 