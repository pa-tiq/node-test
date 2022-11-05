const express = require('express');
const router = express.Router();

router.get('/home',(req,res,next) => {
  res.send('<h1>home</h1>');
}); 
router.get('/',(req,res,next) => { 
  res.redirect('/home');
}); 

module.exports = router;