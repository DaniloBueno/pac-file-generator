const fs = require('fs');
const prependFile = require('prepend-file');
const parameters = require('../config/parameters');

class FileHelper {

    constructor() {
        this.filePath = `${parameters.paths.output}pac.${Date.now()}.yml`;
    }

    appendToFile(data) {
        return new Promise((resolve, reject) => {
            fs.appendFile(`${this.filePath}`, data, (err) => {
                err ? reject(err) : resolve();
            });
        });
    }

    prependToFile(data) {
        return new Promise((resolve, reject) => {
            prependFile(`${this.filePath}`, data, (err) => {
                err ? reject(err) : resolve();
            });
        });
    }

    deleteFile() {
        return new Promise((resolve, reject) => {
            fs.unlink(`${this.filePath}`, (err) => {
                err ? reject(err) : resolve();
            });
        });
    }

    doesFileExist() {
        return new Promise((resolve, reject) => {
            fs.exists(`${this.filePath}`, (exists, err) => {
                err ? reject(err) : resolve(exists);
            });
        });
    }
}

module.exports = new FileHelper();