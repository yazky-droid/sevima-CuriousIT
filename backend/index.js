import express from "express";
import { db } from "./db.js";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

if(db) console.log("Nyambung ke DB")