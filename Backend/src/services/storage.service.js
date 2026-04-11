const fs = require('fs');
const path = require('path');

async function uploadFile(file, fileName) {
    const dir = path.join(__dirname, '../../videos');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, file);
    return { url: `http://localhost:8080/videos/${fileName}` };
}

module.exports = {
    uploadFile
};