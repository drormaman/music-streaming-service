const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello from landing");
});

app.use("/api/", require("./api"));

module.exports = app;
