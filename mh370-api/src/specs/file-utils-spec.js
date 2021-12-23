const fileUtils = require('../file-utils');
const fs = require('fs');
const path = require("path");

describe('fileUtils', function () {
    let filesFolder = '/tmp/test/files';
    let bundlesFolder = '/tmp/test';

    it('should save file at specified path', function () {
        fileUtils.createTextFile(filesFolder + '/test.txt', ['Line 1', 'Line 2']);
        expect(fs.existsSync(filesFolder + '/test.txt')).toBe(true);
    });

    it('should copy file to specified path', function () {
        fileUtils.copyFile(path.join(__dirname, '..', 'resources', 'download-instructions.txt'), filesFolder + '/README.txt');
        expect(fs.existsSync(filesFolder + '/README.txt')).toBe(true);
    });

    it('should bundle folder into a zip file', function (done) {
        fileUtils.zipFolder(filesFolder, bundlesFolder + '/bundle.zip').then(function (response) {
            expect(response.status).toBe('ok');
            expect(fs.existsSync(bundlesFolder + '/bundle.zip')).toBe(true);
            done();
        });
    });

    it('should extract the full path from the URI', function () {
        let fileName = fileUtils.getFilePathFromURI('http://dapds00.nci.org.au/thredds/fileServer/pw31/backscatter_processed/esri_raster_grid/bs_30m/hdr.adf', 'pw31/');
        expect(fileName).toBe('backscatter_processed/esri_raster_grid/bs_30m/hdr.adf');
    });
});
