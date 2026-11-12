const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const invoices = [
  { id: 1, customer: "Ali Traders", amount: 15000, status: "paid" },
  { id: 2, customer: "Khan & Sons", amount: 8200, status: "pending" },
];

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/invoices", (req, res) => res.json(invoices));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on ${port}`));
