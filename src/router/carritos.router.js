import { Router } from "express";
import { cartDao } from "../daos/index.js"

const cartDao = new CartDao ();
const cartRouter = Router ();



cartRouter.get ('/', async (req, res) => {
    res.send(await cartDao.getAll());
})

cartRouter.get ('/:id', async (req, res) => {
    let rta = await cartRouter.getById (req.params.id);
    rta.status === "error" ? res.status(404).send(rta) : res.send(rta);
})

 cartRouter.post ('/', async (req, res) => {
    res.send(await cartDao.create(req.body, req.originalUrl));
})

cartRouter.put ('/:id', async (req, res) => {
    res.send(await cartDao.updateById(req.params.id, req.body));
})

 cartRouter.delete ('/:id', async (req, res) => {
    res.send(await cartDao.deleteById(req.params.id));
})

export default cartRouter;