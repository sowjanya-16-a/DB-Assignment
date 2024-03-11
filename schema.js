
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define ProductCategory schema
const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

// Define Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  SKU: {
    type: String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory'
  },
  inventory_id: mongoose.Schema.Types.ObjectId,
  discount_id: mongoose.Schema.Types.ObjectId,
  price: Number,
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

// Define ProductInventory schema
const productInventorySchema = new mongoose.Schema({
  quantity: Number,
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

// Define Discount schema
const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  discount_percent: Number,
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

// Create models
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const Product = mongoose.model('Product', productSchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = { ProductCategory, Product, ProductInventory, Discount };
