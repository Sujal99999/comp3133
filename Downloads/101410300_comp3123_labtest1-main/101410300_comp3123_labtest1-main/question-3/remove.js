const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
    // Read all the files in the directory
    const files = fs.readdirSync(logsDir);

    // Iterate over each file in the Logs directory and delete them in order
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);  // Synchronously delete the file
        console.log(`Deleting file.. ${file}`);
    });

    // After all files are deleted, remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed successfully.');
} else {
    console.log('Logs directory does not exist.');
}
