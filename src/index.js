require("dotenv").config({path: '../.env'});

const app = require("./App");
const startDB = require("./Config/mongodb");

startDB();

// app.listen(process.env.VITE_BACKEND_URL, () => console.log("Servidor rodando"));
app.listen(8000, () => console.log("Servidor rodando"));