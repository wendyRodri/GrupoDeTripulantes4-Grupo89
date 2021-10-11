import express from "express";

const router = express.Router();

import product from "../api/product/models/product";

//agregar producto

router.post('/agregar-producto', async (req, res) => {
  const body = req.body;
  try {
    const newProduct = await product.create(body);
    res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      error
     });
  }
});

module.exports = router;
