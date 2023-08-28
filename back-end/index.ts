import express from "express";
import bodyParser from 'body-parser';
import { AppDataSource } from "./src/configs/data-source";
import router from "./src/router/router";

const PORT = 3000;

const app = express();

AppDataSource.initialize().then(() => {
    console.log("Connect database success");
}).catch((err) => {
    console.log("Database connection error: ", err);
})

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.json());
app.use(express.json());

app.use("", router);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})
