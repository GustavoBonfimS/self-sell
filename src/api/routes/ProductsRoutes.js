const router = require('express').Router();
const { Products } = require('../models');

router.get('/', async (req, res) => {
  console.log(Products);
  const products = Products.findAll();
  return res.status(200).json(products);
});

router.post('/', async (req, res) => {
  const product = Products.create(req.body);
  return res.status(200).json(product);
});

module.exports = router;
