import express from "express";
import 'dotenv/config'
import userRoute from "./routes/users.js";
import products from "./routes/products.js";
import bodyParser from "body-parser";
import pool from './db/index.js'

const app = express();

const port = process.env.PORT || 3030

app.use((req, res, next) => {
  console.log("First middleware")
  next()
})
app.use(bodyParser.json());
app.use("/", userRoute)
app.use("/", products)

app.listen(port, ()=> console.log(`App listening at ${port}`));



app.get('/', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM products');
    res.send(results.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post("/product/create", async (req, res) =>{
  await pool.query("INSERT INTO products (name, price) VALUES ($1, $2)", [req.body.name, req.body.price])
  console.log(req.body)
  res.send("Data added")
})

app.get("/user/:id", async (req, res) =>{
  // const para = req.params.id
  try {
    const output = await pool.query("SELECT * from products WHERE id= $1" ,[req.params.id]);
    res.send(output.rows)
  } catch (error) {
    res.status(500)
  }

})