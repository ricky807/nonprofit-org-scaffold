const axios = require("axios");

const axiosWithBloom = axios.create({
  baseURL: "https://api.bloomerang.co/v2",
  headers: {
    "x-api-key": process.env.BLOOMERANG_PRIVATE_KEY,
  },
});

module.exports = axiosWithBloom