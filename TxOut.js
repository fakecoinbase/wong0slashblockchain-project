let SignatureUtil = require('SignatureUtils');

module.exports = class TxOut {
    constructor(address, amount) {
        this.address = address;
        this.amount = amount;
    }
}