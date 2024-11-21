const express = require('express');
const cors = require('cors');
const productService = require('./product-services');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/products', productService);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
