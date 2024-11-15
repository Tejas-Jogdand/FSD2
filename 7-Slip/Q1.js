const fs = require('fs').promises;

async function readFiles() {
    try {
        const [data1, data2] = await Promise.all([
            fs.readFile('file1.txt', 'utf8'),
            fs.readFile('file2.txt', 'utf8')
        ]);
        console.log("File 1 content:", data1);
        console.log("File 2 content:", data2);
    } catch (error) {
        console.error("Error reading files:", error);
    }
}

readFiles();