var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/usrates", function(req, res) {
  res.sendFile(__dirname + "/resources/salestax.json");
});

app.get("/gst", function(req, res) {
  res.sendFile(__dirname + "/resources/gst.json");
});

app.get("/vat", function(req, res) {
  res.sendFile(__dirname + "/resources/rates.json");
});
// app.use(express.static(__dirname + "resources"));
// app.use("/resources", express.static(__dirname + "/resources"));
app.listen(3000);
