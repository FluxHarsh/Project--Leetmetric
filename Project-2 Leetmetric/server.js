const express = require("express");
const fetch = require("node-fetch");  
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/leetcode", async (req, res) => {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(" Server Error:", err);
    res.status(500).json({ error: "Something went wrong on the server" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

