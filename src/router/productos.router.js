import { Router } from "express";
import { productDao } from "../daos/index.js"

const productDao = new productDao();
const productRouter = Router();



productRouter.get("/", async (req, res) => {
    res.send(await productDao.getAll());
})

productRouter.get("/:id", async (req, res) => {
    res.send(await productDao.getById(req.params.id));
    rta.status === "error" ? res.status(404).send(rta) : res.send (rta) 
})

productRouter.post("/", async (req, res) => {
    res.send(await productDao.create(req.body));
})

productRouter.put("/:id", async (req, res) => {
    res.send(await productDao.updateById (req.params.id, req.body));
})



productRouter.delete("/:id", async (req, res) => {
    res.send(await productDao.deleteById(req.params.id));
})

export default productRouter;