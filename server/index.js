const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = "${Date.now()}: ${req.url} New Req Received\n"; //print date in log.txt file which is auto generated and the url i.e different url on which we are visiting these all data will print automatically on the file log.txt
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Homepage");
                break;
            case '/about': res.end("I am Akshita Laddha");
                break;
            default:
                res.end("404 Not Found");
        } // there we make three cases which we write after localhost:8000 saerver name
        // res.end("Hello From Server Again");
    })
    // console.log("New Req Rec.") //calling callback function
    // res.end("Hello From Server"); //send a responce to the site
});

myServer.listen(8000, () => console.log("Server Started!"));//8000 is a port, every server have unique port
