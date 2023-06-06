export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, count) {
      this.items.push({ name: item.name, price: item.price, count });
      return this;
    }
  
    getItems() {
      return this.items.map(({ name, price, count }) => ({ item: { name, price }, count }));
    }
  
    getCost() {
      return this.items.reduce((acc, { price, count }) => acc + price * count, 0);
    }
  
    getCount() {
      return this.items.reduce((acc, { count }) => acc + count, 0);
    }
  }