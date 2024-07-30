import "./env.js"

import express from "express";
import {createServer} from "http"
import cors from "cors";
import multer from 'multer'
import { corsOptions } from "./src/constants/config.js";

import kukuroutes from "./src/routes/kuku.routes.js"


const PORT = process.env.PORT || 4000;

const app = express();
const server = createServer(app);

const upload = multer()
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors(corsOptions));

app.use("api/v1/kukudata",upload.none(), kukuroutes );


app.get("/", (req, res) => {
    res.send("Home")
})


server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
