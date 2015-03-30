var should = require('chai').should(),
    MoneyCurrency = require('../money_currencies/index'),
    MoneyFormats = require('../money_currencies/config');


describe('MoneyCurrency', function() {
    it('Return all the currency format keys', function() {
        mc = new MoneyCurrency('AED');
        mc.currencyFormats().length.should.equal(Object.keys(MoneyFormats).length);
    });

    it('Display money format', function() {
        mc = new MoneyCurrency('USD');
        mc.moneyFormat(13).should.equal('$13');
        mc.moneyFormat(13.23).should.equal('$13.23');
    });

    it('Display money format with currency', function() {
        mc = new MoneyCurrency('USD');
        mc.moneyWithCurrencyFormat(13).should.equal('$13 USD');
        mc.moneyWithCurrencyFormat(13.23).should.equal('$13.23 USD');
    });
});
