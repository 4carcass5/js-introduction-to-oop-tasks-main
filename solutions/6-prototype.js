export default class Money {
    constructor(value, currency = 'usd') {
      this.value = value;
      this.currency = currency;
    }
  
    getValue() {
      return this.value;
    }
  
    getCurrency() {
      return this.currency;
    }
  
    exchangeTo(curr) {
      if (this.currency !== curr) {
        let currency = curr;
        let value = this.value * (currency === "usd" ? 1.2 : 0.7);
        return new Money(value, currency);
      }
      return new Money(this.value, this.currency);
    }
  
    add(other_money) {
      let value = this.value + other_money.exchangeTo(this.currency).getValue();
      return new Money(value, this.currency);
    }
  
    format() {
      return this.value.toLocaleString("en-US", { style: "currency", currency: this.currency });
    }
  }