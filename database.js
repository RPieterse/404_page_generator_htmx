const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const { parse } = require('json2csv');

const DATA_DIR = path.join(__dirname, 'storage');
const ACCOUNTS_FILE = path.join(DATA_DIR, 'page_meta.txt');

const ensureFileExists = (file) => {
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, ''); // Create an empty file if it doesn't exist
    }
};

// Ensure data directory and files exist
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

[ACCOUNTS_FILE, TRANSACTIONS_FILE, BUDGETS_FILE].forEach(ensureFileExists);

// Helper function to read CSV file
const readCSV = (file) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(file)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
};

// Helper function to write CSV file
const writeCSV = (file, data) => {
    return new Promise((resolve, reject) => {
        try {
            const csv = parse(data);
            fs.writeFileSync(file, csv);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { readCSV, writeCSV, ACCOUNTS_FILE, TRANSACTIONS_FILE, BUDGETS_FILE };
