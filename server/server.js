const express = require("express");
const app = express();
const Database = require("better-sqlite3");
const cors = require("cors");

const port = 8000;

const db = new Database("./db/product-manager.db", {
    verbose: console.log,
});

app.use(cors({
    origin: ["http://localhost:3000"]
}));

// GET API
app.get("/api/products", (req, res) => {

    // const select = db.prepare("SELECT id, menu FROM header");

    const select = db.prepare("SELECT id, item_name, item_description, item_image, item_brand, item_SKU, item_price, created_at, item_url FROM products")

    const products = select.all();

    res.json(products);
})

app.get("/api/products/:item_url", (req, res) => {
    const itemUrl = req.params.item_url; // Hämta item_url från URL:en
  
    const select = db.prepare(`
      SELECT id, item_name, item_description, item_image, item_brand, item_SKU, item_price, created_at, item_url 
      FROM products 
      WHERE item_url = ?
    `);
  
    const product = select.get(itemUrl); // Hämta produkten från databasen
  
    if (product) {
      res.json(product); // Skicka tillbaka produkten som JSON
    } else {
      res.status(404).json({ error: "Product not found" }); // Skicka ett felmeddelande om produkten inte hittas
    }
  });

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});