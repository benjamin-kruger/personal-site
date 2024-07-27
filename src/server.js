const express = require("express");
const path = require("path");

const app = express();
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
