const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const data = req.url;
    let filename = "";
    if (req.url == "/")
        filename = "index.html";
    else if (req.url !== "/favicon.ico")
        filename = data.substr(1);
    if (filename) {
        try {
            res.end(fs.readFileSync(filename));
        } catch (err) {
            res.statusCode = 404;
            res.end('File not found');
        }
    }
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
