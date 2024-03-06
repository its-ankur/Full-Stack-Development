const http = require('http');
const fs = require('fs');
let url = fs.readFileSync("url.txt", "utf8");
url=JSON.parse(url);

const server = http.createServer((req, res) => {
    const data = req.url;
    if (data === "/") {
        res.end(fs.readFileSync("url.txt", "utf8"));
    } else {
        url.push(data);
        fs.writeFileSync("url.txt", JSON.stringify(url));
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});