import { Router } from express;

const cartRouter = Router();

cartRouter.get ('/', (req, res) => {})
cartRouter.get ('/:id', (req, res) => {})
cartRouter.post ('/', (req, res) => {})
cartRouter.put ('/:id', (req, res) => {})
cartRouter.delete ('/:id', (req, res) => {})

export default cartRouter;
