// const router=require('express').Router();
// const controllers=require('./controllers');
// const authenticate=require('../middleware/authenticate')
// const authorizeUser=require('../middleware/authorize')

// router.post('/products',authenticate,authorizeUser(["admin"]),controllers.createProduct)
// router.get('/products',authenticate,controllers.getProducts)
// router.get('/products/:id',authenticate,controllers.getProductById)
// router.put('/products/:id',authenticate,authorizeUser(["admin"]),controllers.updateProduct)
// router.delete('/products/:id',authenticate,authorizeUser(["admin"]),controllers.deleteProduct)

// module.exports=router;

const express = require('express');
const router = express.Router();

// Controllers should export functions like createProduct, getProducts, etc.
const controllers = require('./controllers');

// Middleware should export functions
const authenticate = require('../middleware/authenticate');
const authorizeUser = require('../middleware/authorize');

// Routes
router.post(
  '/products',
  authenticate,
  authorizeUser(['admin']),
  controllers.createProduct
);

router.get('/products', authenticate, controllers.getProducts);

router.get('/products/:id', authenticate, controllers.getProductById);

router.put(
  '/products/:id',
  authenticate,
  authorizeUser(['admin']),
  controllers.updateProduct
);

router.delete(
  '/products/:id',
  authenticate,
  authorizeUser(['admin']),
  controllers.deleteProduct
);

module.exports = router;