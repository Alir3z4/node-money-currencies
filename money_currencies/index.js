'use strict';

var MoneyCurrency;

MoneyCurrency = (function() {
    function MoneyCurrency(moneyCurrency) {
        this.moneyCurrency = moneyCurrency;
    }

    MoneyCurrency.prototype.setMoneyCurrency = function(moneyCurrency1) {
        this.moneyCurrency = moneyCurrency1;
    };

    MoneyCurrency.prototype.currencyFormats = function() {
        return Object.keys(MONEY_FORMATS)
    };

    MoneyCurrency.prototype.moneyFormat = function(amount) {
        return MONEY_FORMATS[this.moneyCurrency]['money_format']
            .replace('{amount}', amount);
    };

    MoneyCurrency.prototype.moneyWithCurrencyFormat = function(amount) {
        return MONEY_FORMATS[this.moneyCurrency]['money_with_currency_format']
            .replace('{amount}', amount);
    };

    return MoneyCurrency;

})();


module.exports = MoneyCurrency;
