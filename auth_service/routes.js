const router=require('express').Router();
const controllers=require('./controllers');

router.post('/register',controllers.registerUser)
router.post('/login',controllers.loginUser)
router.post('/validate-token',controllers.validateToken)

module.exports=router;