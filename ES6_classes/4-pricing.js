import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }
  // getter for currency
  get currency() {
    return this._currency;
  }
  // setter for amount
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number.');
    }
    this._amount = newAmount;
  }
  // setter for currency
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a currency.');
    } else {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return `${this._amount} {this.currency} (${this.currency})`
  }

  // Static method to convert price
  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
