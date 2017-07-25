var express = require('express');

var PORT = (process.env.PORT || 3000);

var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
	console.log("We're running on "+PORT+" mang");
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})