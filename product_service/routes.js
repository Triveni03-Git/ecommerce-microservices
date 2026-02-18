const router=require('express').Router();
const controllers=require('./controllers');
const authorizeUser = require('./middleware/authorize');
const authenticate = require('./middleware/authenticate');


router.post('/products',authenticate,authorizeUser(['admin']),controllers.createProduct)
router.get('/products',authenticate,controllers.getProducts)
router.get('/products/:id',authenticate,controllers.getProductById)
router.put('/products/:id',authenticate,authorizeUser(['admin']),controllers.updateProduct)
router.delete('/products/:id',authenticate,authorizeUser(['admin']),controllers.deleteProduct)

module.exports=router;



