const express = require('express');
const app = express();
app.use((req,res,next) => { //this function will be executed for every incoming request
	console.log('in the middleware');
  next();
}); 
app.use((req,res,next) => { //this function will be executed for every incoming request
	console.log('in another middleware');
  res.send('<h1>Oi</h1>');
}); 
app.listen(3000);