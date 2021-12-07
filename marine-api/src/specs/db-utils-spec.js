const dbUtils = require('../db-utils');

describe("DBUtils", function () {
    it("should get database connection", function (done) {
        dbUtils.connectToRDS().then(function(client) {
            expect(client).toBeDefined();
            client.release();
            done();
        });
    });
});
