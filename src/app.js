const express = require("express");
const app = express();
const PORT = 3000;
const connectDB = require("./config/db");

app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

app.get("/about", (req, res) => {
  res.send("Just Tinder for developers!");
});

app.get("*", (req, res) => {
  res.send(" Page not found! Error 404").status(404);
});

connectDB()
  .then(() => {
    console.log("Database connected Establishing");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
