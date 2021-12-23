const productService = require('../product-service');
const environment = require('../environment');

describe("productService", function () {
    it("should count list of products", function () {
        let products = productService.getAll();
        expect(products.length).toBe(18);
    });

    it("should get list of products", function () {
        let products = productService.getAll();
        expect(products).toBe(environment.products);
    });

    it("should get product details", function () {
        let product = productService.getDetails("Bathymetry");
        expect(product).toBeDefined();
        expect(product.bundleTable).toBe("marine_mh370.bathymetry_bundle");
    });

    it("should get total Bathymetry bundles by vessel", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Go Phoenix'}).then(function (data) {
            expect(data.totalRecords).toBe('1002');
            expect(data.totalGeometries).toBe('500');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Backscatter bundles by vessel", function (done) {
        let product = productService.getDetails("Backscatter");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Go Phoenix'}).then(function (data) {
            expect(data.totalRecords).toBe('1425');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Hillshade bundles by vessel", function (done) {
        let product = productService.getDetails("Hillshade");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Fugro Combined'}).then(function (data) {
            expect(data.totalRecords).toBe('24587');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Sidescan bundles by vessel", function (done) {
        let product = productService.getDetails("Sidescan");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Go Phoenix'}).then(function (data) {
            expect(data.totalRecords).toBe('1320');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Sub-bottom Profile bundles by vessel", function (done) {
        let product = productService.getDetails("Sub-bottom Profile");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Fugro Equator'}).then(function (data) {
            expect(data.totalRecords).toBe('4543');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Tides bundles by bext", function (done) {
        let product = productService.getDetails("Tides");
        productService.countQuery(product.bundleTable, product.geometryTable, {bext: 'spm'}).then(function (data) {
            expect(data.totalRecords).toBe('100704');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Water Column bundles by vessel", function (done) {
        let product = productService.getDetails("Water Column");
        productService.countQuery(product.bundleTable, product.geometryTable, {vessel: 'Fugro Equator'}).then(function (data) {
            expect(data.totalRecords).toBe('9302');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total bundles by name", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.countQuery(product.bundleTable, product.geometryTable, {bundle: '%GoPhoenix%'}).then(function (data) {
            expect(data.totalRecords).toBe('1002');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get bundles matching the search criteria", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.query(product.bundleTable, product.geometryTable, {vessel: 'Go Phoenix', file_size: 71469815},
            {pageSize: 15, currentPage: 1}, false).then(function (data) {
            expect(data.rows).toBeDefined();
            expect(data.rows.length).toBe(0);
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get the reference data for a product", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.getReferenceData(product.bundleTable).then(function (data) {
            expect(data.vessel).toBeDefined();
            expect(data.bext).toBeDefined();
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get bundles by geometry", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.query(product.bundleTable, product.geometryTable,
            {geom: 'POLYGON((113.80371093749174 -8.574504674805564,116.22070312498843 -8.574504674805564,116.22070312498843 -12.548130767692003,113.80371093749174 -12.548130767692003,113.80371093749174 -8.574504674805564))'},
            {pageSize: 15, currentPage: 1}, false).then(function (data) {
            expect(data.rows).toBeDefined();
            expect(data.rows.length).toBe(0);
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get geometries only", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.query(product.bundleTable, product.geometryTable,
            {geom: 'POLYGON((113.80371093749174 -8.574504674805564,116.22070312498843 -8.574504674805564,116.22070312498843 -12.548130767692003,113.80371093749174 -12.548130767692003,113.80371093749174 -8.574504674805564))'},
            {pageSize: 100, currentPage: 1}, true).then(function (data) {
            expect(data.rows).toBeDefined();
            expect(data.rows.length).toBe(0);
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get min date and max date for a product", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.getMinMaxDates(product.periodSqlQuery).then(function (data) {
            expect(data).toBeDefined();
            expect(data.min_date).toBe('05/10/2014');
            expect(data.max_date).toBeNull();
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Bathymetry files by vessel", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.countFilesQuery(product.bundleTable, product.geometryTable, {
            vessel: 'Go Phoenix'
        }, false).then(function (data) {
            expect(data.totalRecords).toBe('2008');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get total Bathymetry files by geometry", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.countFilesQuery(product.bundleTable, product.geometryTable, {
            geom: 'POLYGON((89.9084 -36.9315,89.9084 -36.4911,90.5676 -36.4911,90.5676 -36.9315,89.9084 -36.9315))'
        }, false).then(function (data) {
            expect(data.totalRecords).toBe('10709');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it("should get Bathymetry files by geometry", function (done) {
        let product = productService.getDetails("Bathymetry");
        productService.filesQuery(product.bundleTable, product.geometryTable, {
            geom: 'POLYGON((89.9084 -36.9315,89.9084 -36.4911,90.5676 -36.4911,90.5676 -36.9315,89.9084 -36.9315))'
        }, {currentPage: 1, pageSize: 15}).then(function (data) {
            expect(data.rows).toBeDefined();
            expect(data.rows.length).toBe(15);
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });
});
