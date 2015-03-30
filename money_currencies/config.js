'use strict';

var MoneyFormats = {
    'AED': {
        'moneyFormat': 'Dhs. {amount}',
        'moneyWithCurrencyFormat': 'Dhs. {amount} AED'
    },
    'ALL': {
        'moneyFormat': 'Lek {amount}',
        'moneyWithCurrencyFormat': 'Lek {amount} ALL'
    },
    'AMD': {
        'moneyFormat': '{amount} AMD',
        'moneyWithCurrencyFormat': '{amount} AMD'
    },
    'ANG': {
        'moneyFormat': 'ƒ{amount}',
        'moneyWithCurrencyFormat': '{amount} NAƒ'
    },
    'AOA': {
        'moneyFormat': 'Kz{amount}',
        'moneyWithCurrencyFormat': 'Kz{amount} AOA'
    },
    'ARS': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} ARS'
    },
    'AUD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} AUD'
    },
    'AWG': {
        'moneyFormat': 'Afl{amount}',
        'moneyWithCurrencyFormat': 'Afl{amount} AWG'
    },
    'AZN': {
        'moneyFormat': 'm.{amount}',
        'moneyWithCurrencyFormat': 'm.{amount} AZN'
    },
    'BAM': {
        'moneyFormat': 'KM {amount}',
        'moneyWithCurrencyFormat': 'KM {amount} BAM'
    },
    'BBD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} Bds'
    },
    'BDT': {
        'moneyFormat': 'Tk {amount}',
        'moneyWithCurrencyFormat': 'Tk {amount} BDT'
    },
    'BGN': {
        'moneyFormat': '{amount} лв',
        'moneyWithCurrencyFormat': '{amount} лв BGN'
    },
    'BHD': {
        'moneyFormat': '{amount} BD',
        'moneyWithCurrencyFormat': '{amount} BHD'
    },
    'BND': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} BND'
    },
    'BOB': {
        'moneyFormat': 'Bs{amount}',
        'moneyWithCurrencyFormat': 'Bs{amount} BOB'
    },
    'BRL': {
        'moneyFormat': 'R$ {amount}',
        'moneyWithCurrencyFormat': 'R$ {amount} BRL'
    },
    'BSD': {
        'moneyFormat': 'BS${amount}',
        'moneyWithCurrencyFormat': 'BS${amount} BSD'
    },
    'BTN': {
        'moneyFormat': 'Nu {amount}',
        'moneyWithCurrencyFormat': 'Nu {amount} BTN'
    },
    'BWP': {
        'moneyFormat': 'P{amount}',
        'moneyWithCurrencyFormat': 'P{amount} BWP'
    },
    'BYR': {
        'moneyFormat': 'Br {amount}',
        'moneyWithCurrencyFormat': 'Br {amount} BYR'
    },
    'BZD': {
        'moneyFormat': 'BZ${amount}',
        'moneyWithCurrencyFormat': 'BZ${amount} BZD'
    },
    'CAD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} CAD'
    },
    'CHF': {
        'moneyFormat': 'SFr. {amount}',
        'moneyWithCurrencyFormat': 'SFr. {amount} CHF'
    },
    'CLP': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} CLP'
    },
    'CNY': {
        'moneyFormat': '¥{amount}',
        'moneyWithCurrencyFormat': '¥{amount} CNY'
    },
    'COP': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} COP'
    },
    'CRC': {
        'moneyFormat': '₡ {amount}',
        'moneyWithCurrencyFormat': '₡ {amount} CRC'
    },
    'CZK': {
        'moneyFormat': '{amount} Kč',
        'moneyWithCurrencyFormat': '{amount} Kč'
    },
    'DKK': {
        'moneyFormat': '{amount}',
        'moneyWithCurrencyFormat': 'kr.{amount}'
    },
    'DOP': {
        'moneyFormat': 'RD$ {amount}',
        'moneyWithCurrencyFormat': 'RD$ {amount}'
    },
    'DZD': {
        'moneyFormat': 'DA {amount}',
        'moneyWithCurrencyFormat': 'DA {amount} DZD'
    },
    'EGP': {
        'moneyFormat': 'LE {amount}',
        'moneyWithCurrencyFormat': 'LE {amount} EGP'
    },
    'ETB': {
        'moneyFormat': 'Br{amount}',
        'moneyWithCurrencyFormat': 'Br{amount} ETB'
    },
    'EUR': {
        'moneyFormat': '€{amount}',
        'moneyWithCurrencyFormat': '€{amount} EUR'
    },
    'FJD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': 'FJ${amount}'
    },
    'GBP': {
        'moneyFormat': '£{amount}',
        'moneyWithCurrencyFormat': '£{amount} GBP'
    },
    'GEL': {
        'moneyFormat': '{amount} GEL',
        'moneyWithCurrencyFormat': '{amount} GEL'
    },
    'GHS': {
        'moneyFormat': 'GH₵{amount}',
        'moneyWithCurrencyFormat': 'GH₵{amount}'
    },
    'GMD': {
        'moneyFormat': 'D {amount}',
        'moneyWithCurrencyFormat': 'D {amount} GMD'
    },
    'GTQ': {
        'moneyFormat': 'Q{amount}',
        'moneyWithCurrencyFormat': '{amount} GTQ'
    },
    'GYD': {
        'moneyFormat': 'G${amount}',
        'moneyWithCurrencyFormat': '${amount} GYD'
    },
    'HKD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': 'HK${amount}'
    },
    'HNL': {
        'moneyFormat': 'L {amount}',
        'moneyWithCurrencyFormat': 'L {amount} HNL'
    },
    'HRK': {
        'moneyFormat': '{amount} kn',
        'moneyWithCurrencyFormat': '{amount} kn HRK'
    },
    'HUF': {
        'moneyFormat': '{amount}',
        'moneyWithCurrencyFormat': '{amount} Ft'
    },
    'IDR': {
        'moneyFormat': '{amount}',
        'moneyWithCurrencyFormat': 'Rp {amount}'
    },
    'ILS': {
        'moneyFormat': '{amount} NIS',
        'moneyWithCurrencyFormat': '{amount} NIS'
    },
    'INR': {
        'moneyFormat': 'Rs. {amount}',
        'moneyWithCurrencyFormat': 'Rs. {amount}'
    },
    'ISK': {
        'moneyFormat': '{amount} kr',
        'moneyWithCurrencyFormat': '{amount} kr ISK'
    },
    'JEP': {
        'moneyFormat': '£{amount}',
        'moneyWithCurrencyFormat': '£{amount} JEP'
    },
    'JMD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} JMD'
    },
    'JOD': {
        'moneyFormat': '{amount} JD',
        'moneyWithCurrencyFormat': '{amount} JOD'
    },
    'JPY': {
        'moneyFormat': '¥{amount}',
        'moneyWithCurrencyFormat': '¥{amount} JPY'
    },
    'KES': {
        'moneyFormat': 'KSh{amount}',
        'moneyWithCurrencyFormat': 'KSh{amount}'
    },
    'KGS': {
        'moneyFormat': 'лв{amount}',
        'moneyWithCurrencyFormat': 'лв{amount}'
    },
    'KHR': {
        'moneyFormat': 'KHR{amount}',
        'moneyWithCurrencyFormat': 'KHR{amount}'
    },
    'KRW': {
        'moneyFormat': '₩{amount}',
        'moneyWithCurrencyFormat': '₩{amount} KRW'
    },
    'KWD': {
        'moneyFormat': '{amount} KD',
        'moneyWithCurrencyFormat': '{amount} KWD'
    },
    'KYD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} KYD'
    },
    'KZT': {
        'moneyFormat': '{amount} KZT',
        'moneyWithCurrencyFormat': '{amount} KZT'
    },
    'LBP': {
        'moneyFormat': 'L£{amount}',
        'moneyWithCurrencyFormat': 'L£{amount} LBP'
    },
    'LKR': {
        'moneyFormat': 'Rs {amount}',
        'moneyWithCurrencyFormat': 'Rs {amount} LKR'
    },
    'LTL': {
        'moneyFormat': '{amount} Lt',
        'moneyWithCurrencyFormat': '{amount} Lt'
    },
    'LVL': {
        'moneyFormat': 'Ls {amount}',
        'moneyWithCurrencyFormat': 'Ls {amount} LVL'
    },
    'MAD': {
        'moneyFormat': '{amount} dh',
        'moneyWithCurrencyFormat': 'Dh {amount} MAD'
    },
    'MDL': {
        'moneyFormat': '{amount} MDL',
        'moneyWithCurrencyFormat': '{amount} MDL'
    },
    'MGA': {
        'moneyFormat': 'Ar {amount}',
        'moneyWithCurrencyFormat': 'Ar {amount} MGA'
    },
    'MKD': {
        'moneyFormat': 'ден {amount}',
        'moneyWithCurrencyFormat': 'ден {amount} MKD'
    },
    'MMK': {
        'moneyFormat': 'K{amount}',
        'moneyWithCurrencyFormat': 'K{amount} MMK'
    },
    'MNT': {
        'moneyFormat': '{amount} ₮',
        'moneyWithCurrencyFormat': '{amount} MNT'
    },
    'MOP': {
        'moneyFormat': 'MOP${amount}',
        'moneyWithCurrencyFormat': 'MOP${amount}'
    },
    'MUR': {
        'moneyFormat': 'Rs {amount}',
        'moneyWithCurrencyFormat': 'Rs {amount} MUR'
    },
    'MVR': {
        'moneyFormat': 'Rf{amount}',
        'moneyWithCurrencyFormat': 'Rf{amount} MRf'
    },
    'MXN': {
        'moneyFormat': '$ {amount}',
        'moneyWithCurrencyFormat': '$ {amount} MXN'
    },
    'MYR': {
        'moneyFormat': 'RM{amount} MYR',
        'moneyWithCurrencyFormat': 'RM{amount} MYR'
    },
    'MZN': {
        'moneyFormat': '{amount} Mt',
        'moneyWithCurrencyFormat': 'Mt {amount} MZN'
    },
    'NAD': {
        'moneyFormat': 'N${amount}',
        'moneyWithCurrencyFormat': 'N${amount} NAD'
    },
    'NGN': {
        'moneyFormat': '₦{amount}',
        'moneyWithCurrencyFormat': '₦{amount} NGN'
    },
    'NIO': {
        'moneyFormat': 'C${amount}',
        'moneyWithCurrencyFormat': 'C${amount} NIO'
    },
    'NOK': {
        'moneyFormat': 'kr {amount}',
        'moneyWithCurrencyFormat': 'kr {amount} NOK'
    },
    'NPR': {
        'moneyFormat': 'Rs{amount}',
        'moneyWithCurrencyFormat': 'Rs{amount} NPR'
    },
    'NZD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} NZD'
    },
    'OMR': {
        'moneyFormat': '{amount} OMR',
        'moneyWithCurrencyFormat': '{amount} OMR'
    },
    'PEN': {
        'moneyFormat': 'S/. {amount}',
        'moneyWithCurrencyFormat': 'S/. {amount} PEN'
    },
    'PGK': {
        'moneyFormat': 'K {amount}',
        'moneyWithCurrencyFormat': 'K {amount} PGK'
    },
    'PHP': {
        'moneyFormat': '₱{amount}',
        'moneyWithCurrencyFormat': '₱{amount} PHP'
    },
    'PKR': {
        'moneyFormat': 'Rs.{amount}',
        'moneyWithCurrencyFormat': 'Rs.{amount} PKR'
    },
    'PLN': {
        'moneyFormat': '{amount} zl',
        'moneyWithCurrencyFormat': '{amount} zl PLN'
    },
    'PYG': {
        'moneyFormat': 'Gs. {amount}',
        'moneyWithCurrencyFormat': 'Gs. {amount} PYG'
    },
    'QAR': {
        'moneyFormat': 'QAR {amount}',
        'moneyWithCurrencyFormat': 'QAR {amount}'
    },
    'RON': {
        'moneyFormat': '{amount} lei',
        'moneyWithCurrencyFormat': '{amount} lei RON'
    },
    'RSD': {
        'moneyFormat': '{amount} RSD',
        'moneyWithCurrencyFormat': '{amount} RSD'
    },
    'RUB': {
        'moneyFormat': 'руб{amount}',
        'moneyWithCurrencyFormat': 'руб{amount} RUB'
    },
    'RWF': {
        'moneyFormat': '{amount} RF',
        'moneyWithCurrencyFormat': '{amount} RWF'
    },
    'SAR': {
        'moneyFormat': '{amount} SR',
        'moneyWithCurrencyFormat': '{amount} SAR'
    },
    'SCR': {
        'moneyFormat': 'Rs {amount}',
        'moneyWithCurrencyFormat': 'Rs {amount} SCR'
    },
    'SEK': {
        'moneyFormat': '{amount} kr',
        'moneyWithCurrencyFormat': '{amount} kr SEK'
    },
    'SGD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} SGD'
    },
    'STD': {
        'moneyFormat': 'Db {amount}',
        'moneyWithCurrencyFormat': 'Db {amount} STD'
    },
    'SYP': {
        'moneyFormat': 'S£{amount}',
        'moneyWithCurrencyFormat': 'S£{amount} SYP'
    },
    'THB': {
        'moneyFormat': '{amount} ฿',
        'moneyWithCurrencyFormat': '{amount} ฿ THB'
    },
    'TND': {
        'moneyFormat': '{amount}',
        'moneyWithCurrencyFormat': '{amount} DT'
    },
    'TRY': {
        'moneyFormat': '{amount}TL',
        'moneyWithCurrencyFormat': '{amount}TL'
    },
    'TTD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} TTD'
    },
    'TWD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} TWD'
    },
    'TZS': {
        'moneyFormat': '{amount} TZS',
        'moneyWithCurrencyFormat': '{amount} TZS'
    },
    'UAH': {
        'moneyFormat': '₴{amount}',
        'moneyWithCurrencyFormat': '₴{amount} UAH'
    },
    'UGX': {
        'moneyFormat': 'Ush {amount}',
        'moneyWithCurrencyFormat': 'Ush {amount} UGX'
    },
    'USD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} USD'
    },
    'UYU': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount} UYU'
    },
    'VEF': {
        'moneyFormat': 'Bs. {amount}',
        'moneyWithCurrencyFormat': 'Bs. {amount} VEF'
    },
    'VND': {
        'moneyFormat': '{amount}₫',
        'moneyWithCurrencyFormat': '{amount} VND'
    },
    'VUV': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': '${amount}VT'
    },
    'WST': {
        'moneyFormat': 'WS$ {amount}',
        'moneyWithCurrencyFormat': 'WS$ {amount} WST'
    },
    'XAF': {
        'moneyFormat': 'FCFA{amount}',
        'moneyWithCurrencyFormat': 'FCFA{amount} XAF'
    },
    'XBT': {
        'moneyFormat': '{amount} BTC',
        'moneyWithCurrencyFormat': '{amount} BTC'
    },
    'XCD': {
        'moneyFormat': '${amount}',
        'moneyWithCurrencyFormat': 'EC${amount}'
    },
    'XOF': {
        'moneyFormat': 'CFA{amount}',
        'moneyWithCurrencyFormat': 'CFA{amount} XOF'
    },
    'XPF': {
        'moneyFormat': '{amount} XPF',
        'moneyWithCurrencyFormat': '{amount} XPF'
    },
    'ZAR': {
        'moneyFormat': 'R {amount}',
        'moneyWithCurrencyFormat': 'R {amount} ZAR'
    },
    'ZMW': {
        'moneyFormat': 'K{amount}',
        'moneyWithCurrencyFormat': 'ZMW{amount}'
    }
};


module.exports = MoneyFormats;
