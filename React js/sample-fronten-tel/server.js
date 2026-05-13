import http from 'http';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 5000;
const FILES_DIR = join(__dirname, 'files');

// Ensure the target 'files' directory exists
async function ensureDir() {
    try {
        await fs.mkdir(FILES_DIR, { recursive: true });
    } catch (err) {
        console.error("Error creating files directory:", err);
    }
}
ensureDir();

const server = http.createServer(async (req, res) => {
    // Manual CORS middleware
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }

    // Helper to send JSON responses
    const sendJson = (statusCode, data) => {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    // Helper to parse JSON body streams
    const getBody = () => new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', reject);
    });

    try {
        // Route 1: Get all files
        if (req.method === 'GET' && req.url === '/api/files') {
            const files = await fs.readdir(FILES_DIR);
            return sendJson(200, files);
        }

        // Route 2: Create a new file
        if (req.method === 'POST' && req.url === '/api/files') {
            const body = await getBody();
            const { fileName } = body;
            if (!fileName) return sendJson(400, { error: 'File name is required' });

            const filePath = FILES_DIR + '/' + fileName;
            try {
                // Write empty content to create the file. 'wx' flag causes it to fail if it already exists
                await fs.writeFile(filePath, '', { flag: 'wx' });
                return sendJson(201, { message: 'File created successfully', fileName });
            } catch (err) {
                return sendJson(500, { error: err.code === 'EEXIST' ? 'File already exists' : err.message });
            }
        }

        // Regular expression to match routes requiring a filename param (PUT, PATCH, DELETE)
        const fileRouteMatch = req.url.match(/^\/api\/files\/(.+)$/);

        if (fileRouteMatch) {
            // decodeURIComponent safely resolves spaces/special characters
            const filename = decodeURIComponent(fileRouteMatch[1]);
            const filePath = FILES_DIR + '/' + filename;

            // Route 3: Insert/Replace content in an existing file
            if (req.method === 'PUT') {
                const body = await getBody();
                await fs.writeFile(filePath, body.content || '');
                return sendJson(200, { message: 'Content written successfully' });
            }

            // Route 4: Append data to an existing file
            if (req.method === 'PATCH') {
                const body = await getBody();
                await fs.appendFile(filePath, body.content || '');
                return sendJson(200, { message: 'Content appended successfully' });
            }

            // Route 5: Delete/Remove a file
            if (req.method === 'DELETE') {
                await fs.unlink(filePath);
                return sendJson(200, { message: 'File deleted successfully' });
            }
        }

        // Fallback for unmatched routes
        sendJson(404, { error: 'Not Found' });

    } catch (err) {
        sendJson(500, { error: err.message });
    }
});

server.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});