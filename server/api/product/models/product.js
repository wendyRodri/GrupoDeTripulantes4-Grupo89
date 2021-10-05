'use strict';
const mongoose = require("mongoose");
const schemaProduct = mongoose.Schema({
  nombre: { type: String, require: true },
  categoria: {type:String, require:true},
  imagen: { type: String, require: true },
  descripcion:String,
  precio: {type:Number, require:true},
  cantidad: {type:Number, require:true},
  stock: { type: Boolean, require: true },
});

const product = (module.exports = mongoose.model('product', schemaProduct));
