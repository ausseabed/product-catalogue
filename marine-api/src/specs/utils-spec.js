const utils = require('../utils');

describe('utils', function () {
    it('should return Australia for the entered emailAddress', function () {
        let countryName = utils.getCountryByEmail('test@company.com.au');
        expect(countryName).toBe('Australia');
    });

    it('should return null for the entered emailAddress', function () {
        let countryName = utils.getCountryByEmail('test@company.com.zz');
        expect(countryName).toBeUndefined();
    });

    it('should return Australia for the entered IP address', function (done) {
        utils.getCountryByIP('124.47.132.132').then(function (countryName) {
            expect(countryName).toBe('Australia');
            done();
        });
    });

    it('should return start and end dates from previous month', function () {
        let previousMonth = utils.getPreviousMonthDates();
        expect(previousMonth).toBeDefined();
    });

    it('should return 0001 as string', function () {
        expect(utils.padStart(1, 4, '0')).toBe('0001');
    });

    it('should return 1234 as string', function () {
        expect(utils.padStart(1234, 4, '0')).toBe('1234');
    });
});
