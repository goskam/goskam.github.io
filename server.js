const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to serve static files
const serveStaticFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Server error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};

const server = http.createServer((req, res) => {
    // Serve index.html
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        serveStaticFile(res, filePath, 'text/html');
    }
    // Serve styles.css
    else if (req.url === '/styles.css') {
        const filePath = path.join(__dirname, 'styles.css');
        serveStaticFile(res, filePath, 'text/css');
    }
    // Serve video file (demo2.mp4)
    else if (req.url === '/video/demo2.mp4') {
        const filePath = path.join(__dirname, 'video', 'demo2.mp4');
        serveStaticFile(res, filePath, 'video/mp4');
    }
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
