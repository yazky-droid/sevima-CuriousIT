import express from "express";
import { db } from "./db.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/articles.js"
import cors from 'cors'

const app = express()
const port = 3000
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/articles', postRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

if(db) console.log("Nyambung ke DB")