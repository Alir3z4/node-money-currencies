'use strict';

var MoneyFormats = require('./config');
var MoneyCurrency;

MoneyCurrency = (function() {
    var _moneyCurrency;

    function MoneyCurrency(moneyCurrency) {
        _moneyCurrency = moneyCurrency;
    }

    MoneyCurrency.prototype.currencyFormats = function() {
        return Object.keys(MoneyFormats)
    };

    MoneyCurrency.prototype.moneyFormat = function(amount) {
        return MoneyFormats[_moneyCurrency]['moneyFormat']
            .replace('{amount}', amount);
    };

    MoneyCurrency.prototype.moneyWithCurrencyFormat = function(amount) {
        return MoneyFormats[_moneyCurrency]['moneyWithCurrencyFormat']
            .replace('{amount}', amount);
    };

    return MoneyCurrency;

})();


module.exports = MoneyCurrency;
