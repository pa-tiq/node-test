const path = require ('path');
const express = require('express');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');
const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded()); //parse the incoming request body
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => { 
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
}); 

app.listen(3000);