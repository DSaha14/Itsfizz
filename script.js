
const express = require("express");
const { gsap } = require("gsap");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (if needed)
app.use(express.static("public"));

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
