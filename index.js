const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./include/dbconnect');
const { Product, Category, Brand, Variant} = require('./model');
const sgMail = require('@sendgrid/mail');
const Jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;
const jwtKey = 'e-comm';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// Get all products
app.get('/products',verifyToken, async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category, attributes: ['title'], required: false },
        { model: Brand, attributes: ['brandname'], required: false },
        { model: Variant, attributes: ['vlist'], required: false },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.get('/products/:id', verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId, {
      include: [
        { model: Category, attributes: ['title'], required: false },
        { model: Brand, attributes: ['brandname'], required: false },
        { model: Variant, attributes: ['vlist'], required: false },
      ],
    });
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Verify JWT Token
function verifyToken(req, res, next) {
  let token = req.headers['authorization'];
  if (token) {
    token = token.split(' ')[1];
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: 'Please provide a valid token' });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: 'Token is required for authentication.' });
  }
}

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
