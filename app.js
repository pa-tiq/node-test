const path = require("path");
const express = require("express");
const rootDir = require("./util/path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

const app = express();

app.engine("hbs", hbs.engine());
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded()); //parse the incoming request body
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  res.status(404).render("404", { pageTitle: "404" });
});

app.listen(3000);
