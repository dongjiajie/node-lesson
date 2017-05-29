var http = require("http");
// var querystring = require("querystring");

var contents = JSON.stringify({
    name: "deng",
    age: 22
});

var options = {
    host: "dengzhr.com",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function(data) {
        console.log(data);
    });
});

req.write(contents);
req.end();