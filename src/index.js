const dotenv = require("dotenv");
const app = require("./App");
const startDB = require("./Config/mongodb");

dotenv.config({path: '../.env'});
startDB();

// app.listen(process.env.VITE_BACKEND_URL || 8000, () => console.log("Servidor rodando"));
app.listen(8000, () => console.log("Servidor rodando"));