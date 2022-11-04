const fs = require("fs");

const requestHandler = (req,res) => {

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>buceta</title></head>");
    res.write(
      `<body>
        <form action="/message" method="POST">
          <input type="text" name="caralho">
            <button type="submit">Send</button>
          </input>
        </form>
      </body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    // listen to the data event and adds a function that should be executed for the 'data' event
    const body = []; // this can be a const because we won't change it
    req.on("data" , (chunk) => {
      body.push(chunk); // we're not changing the object, we're adding data to it
    }); 
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();// add all the chunks from 'body' to a new Buffer
      const message = parsedBody.split('=')[1];
      fs.writeFileSync("message.txt", message, err => {
        res.statusCode = 302; //302 = redirection
        res.setHeader("Location", "/");
        return res.end(); // You must not write in the response after res.end().
      });
      // all the chunks were already read, and they are all stored in the 'body' array
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>buceta</title></head>");
  res.write("<body><h1>oie<h1></body>");
  res.write("</html>");
  res.end();

};

module.exports = requestHandler;