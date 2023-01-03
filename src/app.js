import productRouter from "./router/productos.mongodb.routes.js";
import cartRouter from "./router/carritos.mongodb.routes.js";
import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true})) 
app.use("/api/productos", productRouter);
app.use("/api/carrito", cartRouter);
app.use((req,res) => { res.status(400).send ({ error: -2, descripcion: `ruta ${req.baseUrl} ${req.url} metodo ${req.method} no implementada` })})

app.get("/", (req,res)=> {
    res.send("Segunda Entrega Proyecto Final")
})

app.listen(PORT, () => {
  console.log(` Server Up! on Port: ${PORT} !`);
});

