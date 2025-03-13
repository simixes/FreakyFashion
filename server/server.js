const express = require("express");
const app = express();
const Database = require("better-sqlite3");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');

const port = 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = new Database("./db/product-manager.db", {
    verbose: console.log,
});

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true, // Tillåt cookies att skickas
}));

app.use(
  session({
    secret: 'hemlig_nyckel_010',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Använd true om du använder HTTPS
      sameSite: 'lax', // eller 'none' om du använder secure: true
      httpOnly: true, // Förhindrar åtkomst till cookies via JavaScript
    },
  })
);

// GET API
app.get("/api/products", (req, res) => {

    const select = db.prepare("SELECT id, item_name, item_description, item_image, item_brand, item_SKU, item_price, created_at, item_url FROM products")

    const products = select.all();

    res.json(products);
})

app.post("/api/products", (req, res) => {
  const { name, description, image, sku, brand, price } = req.body; 

  const itemUrl = name
    .toLowerCase()
    .replace(/[åä]/g, 'a') 
    .replace(/[ö]/g, 'o') 
    .replace(/\s+/g, '-') 
    .replace(/^-+|-+$/g, '') 
    .replace(/-{2,}/g, '-')
    .trim();  

  const insert = db.prepare(`
    INSERT INTO products (item_name, item_description, item_image, item_SKU, item_brand, item_price, item_url)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const result = insert.run(name, description, image, sku, brand, price, itemUrl);

  res.status(201).json({ message: "Produkt tillagd!", id: result.lastInsertRowid, item_url: itemUrl });
});

app.post('/api/basket', (req, res) => {

  const productId = req.body.productId;

  let basket = req.session.basket ?? [];

  let basketItem = basket.find(x => x.product.id == productId);

  if (basketItem) {
    basketItem.quantity += 1;
  } else {
    const product = db.prepare(`SELECT id, item_name, item_description, item_image, item_brand, item_SKU, item_price, created_at, item_url 
      FROM products 
      WHERE id = ?
      `).get(productId);

    basketItem = {
      product,
      quantity: 1
    }

    basket.push(basketItem);

    req.session.basket = basket;
  }

  console.log('Produkt-ID mottaget:', productId);
  
  res.json({ message: 'Produkt mottagen', productId });
});



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

app.delete("/api/products/:id", (req, res) => {
  const {id} = req.params;
  const deleteStmt = db.prepare("DELETE from products WHERE id = ?");
  const result = deleteStmt.run(id);

  if (result.changes > 0) {
    res.status(200).json({ message: "Produkt borttagen" });
  } else {
    res.status(404).json({ error: "Produkten hittades inte" });
  }
});