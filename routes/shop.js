const path = require ('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/home',(req,res,next) => {
  //res.sendFile(path.join(__dirname,'..','views','shop.html'));
  res.sendFile(path.join(rootDir,'views','shop.html'));
}); 
router.get('/',(req,res,next) => { 
  res.redirect('/home');
}); 

module.exports = router;