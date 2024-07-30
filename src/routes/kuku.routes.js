import express from "express";
import { getData, getTopPicks, getTopTen, getVipShows } from "../controllers/kuku.controller.js";

const app = express.Router();

app.get("/", getData)
app.get("/toppicks", getTopPicks)
app.get("/topten", getTopTen)
app.get("/vipshows", getVipShows)

export default app;