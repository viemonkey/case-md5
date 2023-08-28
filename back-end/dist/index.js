"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/configs/data-source");
const router_1 = __importDefault(require("./src/router/router"));
const PORT = 3000;
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log("Connect database success");
}).catch((err) => {
    console.log("Database connection error: ", err);
});
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use("", router_1.default);
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
//# sourceMappingURL=index.js.map