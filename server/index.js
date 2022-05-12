const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: ".env" });

const express = require("express");
const app = express();
const port = 1337;

const axiosWithBloom = require("./axiosWithBloom");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

app.post("/constituent", async (req, res) => {
  try {
    let response = await axiosWithBloom.post("/constituent", req.body);

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
