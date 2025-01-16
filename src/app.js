const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

app.get("/about", (req, res) => {
  res.send("Just Tinder for developers!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
