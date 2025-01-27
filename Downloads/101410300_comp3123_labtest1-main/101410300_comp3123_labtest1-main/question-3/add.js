const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists, if not, create it
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

// Change the process current working directory to the Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text into each file
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `This is log file ${i}`;
    
    // Synchronously write text to the log file
    fs.writeFileSync(fileName, fileContent);
    console.log(`Creating file.. ${fileName}`);
}
