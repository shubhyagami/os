const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
".html": "text/html; charset=utf-8",
".js": "application/javascript; charset=utf-8",
".wasm": "application/wasm",
".iso": "application/octet-stream",
".bin": "application/octet-stream",
".png": "image/png",
".css": "text/css",
".json": "application/json; charset=utf-8",
};

const server = http.createServer((req, res) => {
res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
res.setHeader("Access-Control-Allow-Origin", "*");

let url = req.url.split("?")[0];
if (url === "/") url = "/index.html";

let filePath = path.join(__dirname, url);
let ext = path.extname(filePath);
let contentType = MIME_TYPES[ext] || "application/octet-stream";

fs.readFile(filePath, (err, data) => {
if (err) {
res.writeHead(404, { "Content-Type": "text/plain" });
res.end("404 Not Found: " + url);
return;
}
res.writeHead(200, { "Content-Type": contentType });
res.end(data);
});
});

server.listen(PORT, "0.0.0.0", () => {
console.log("Server running at http://localhost:" + PORT);
console.log("Open your browser to http://localhost:" + PORT);
});
