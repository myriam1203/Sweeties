const express = require("express");
const router = require("./routes");

const port = 8080;
const app = express();

// les échanges sont faits en JSON
app.use(express.json());


app.use("/api", router);

app.listen(port, () => console.log(`serveur en ecoute sur http://localhost:${port}`));
