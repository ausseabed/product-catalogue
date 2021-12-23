const utils = require('../utils');

describe('utils', function () {
    it('should return Australia for the entered IP address', function (done) {
        utils.getCountryByIP('124.47.132.132').then(function (countryName) {
            expect(countryName).toBe('Australia');
            done();
        }).catch((error) => {
            fail('Should not throw error.');
        });
    });

    it('should return 0001 as string', function () {
        expect(utils.padStart(1, 4, '0')).toBe('0001');
    });

    it('should return 1234 as string', function () {
        expect(utils.padStart(1234, 4, '0')).toBe('1234');
    });
});
