const path = require ('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/',(req,res,next) => {
  console.log(adminData.products); //this data is shared with every user and every request
  res.sendFile(path.join(rootDir,'views','shop.html'));
}); 

module.exports = router;