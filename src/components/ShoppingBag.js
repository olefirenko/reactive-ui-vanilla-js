import moneyFormatter from "../helpers/moneyFormatter";

class ShoppingBag {
  constructor() {
    this.items = [];
  }

  addItem(Item) {
    this.items.push(Item);
  }

  removeItem(Item) {
    this.items.splice(this.items.indexOf(Item), 1);
  }

  getTotal() {
    return this.items.reduce((a, b) => a + Number(b["price"]), 0);
  }

  getTotalFormatted() {
    return moneyFormatter(this.getTotal());
  }

  render() {
    return `${this.getTotalFormatted()}`;
  }
}

export default ShoppingBag;
