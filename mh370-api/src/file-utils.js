const fs = require('fs');
const fsExtra = require('fs-extra');
const http = require('http');
const archiver = require('archiver');
const { logger } = require('./logger');

let createFolderIfNotExists = function (fullPath) {
    let position = fullPath.lastIndexOf('/');
    let outputFolder = fullPath.substring(0, position);
    fsExtra.ensureDirSync(outputFolder);
};

module.exports = {
    createTextFile: function (outputFile, rows) {
        createFolderIfNotExists(outputFile);
        let writeStream = fs.createWriteStream(outputFile);
        for (let i = 0; i < rows.length; i++) {
            writeStream.write(rows[i] + '\r\n');
        }
        writeStream.end();
    },
    copyFile: function (inputFile, outputFile) {
        createFolderIfNotExists(outputFile);
        fs.writeFileSync(outputFile, fs.readFileSync(inputFile));
    },
    zipFolder: function (inputFolder, outputFile) {
        return new Promise(function (resolve, reject) {
            createFolderIfNotExists(outputFile);
            let output = fs.createWriteStream(outputFile);
            let archive = archiver('zip', {zlib: {level: 9}});

            archive.on('error', function (error) {
                reject(error);
            });

            output.on('close', function () {
                logger.info('Finished zipping folder.');
                resolve({
                    status: 'ok',
                    fileSize: archive.pointer()
                });
            });

            archive.pipe(output);
            archive.directory(inputFolder, false);

            archive.finalize();
        });
    },
    downloadDataToFile: function (url, outputFile) {
        return new Promise(function (resolve, reject) {
            createFolderIfNotExists(outputFile);
            let writeStream = fs.createWriteStream(outputFile);
            http.get(url, function (response) {
                if (response.statusCode !== 200) {
                    reject(new Error('The requested file could not be downloaded, statusCode: ' + response.statusCode));
                } else {
                    response.pipe(writeStream);
                    response.on('end', function () {
                        resolve('ok');
                    });
                }
            }).on('error', function (error) {
                writeStream.close();
                fs.unlinkSync(outputFile);
                reject(error);
            });
        });
    },
    getFilePathFromURI: function (uri, pathStart) {
        let startIndex = uri.lastIndexOf(pathStart) + pathStart.length;
        return uri.substring(startIndex);
    }
};
