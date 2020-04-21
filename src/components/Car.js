import Component from "./BaseComponent";
import moneyFormatter from "../helpers/moneyFormatter";

class Car extends Component {
  constructor(props) {
    super();

    this.modelClass = props.modelClass;
    this.version = props.version;
    this.pricing = props.price;
    this.imagePath = props.imagePath;
    this.isAddedToShoppingBag = false;
  }

  get name() {
    return this.modelClass + " " + this.version;
  }

  get price() {
    return this.pricing.amount;
  }

  get priceFormatted() {
    return moneyFormatter(
      this.price,
      this.pricing.locale,
      this.pricing.currency
    );
  }

  toggleShoppingBag() {
    this.isAddedToShoppingBag = !this.isAddedToShoppingBag;

    // dispatch an event so ShoppingBag component can be updated
    const event = new CustomEvent("carShoppingBagToggle", { detail: this });
    document.dispatchEvent(event);
  }

  render() {
    return `<div class="car-item ${
      this.isAddedToShoppingBag ? "in-shopping-bag" : ""
    }" onclick="document.componentRegistry[${this._id}].toggleShoppingBag()">
                <h2 class="car-title">${this.name}</h2>
                <img src="${this.imagePath}" alt="" />
                <div class="car-price">${this.priceFormatted}</div>
                <div class="add-shopping-bag-button" >${
                  this.isAddedToShoppingBag
                    ? "Remove from Shopping Bag"
                    : "Add to Shopping Bag"
                }</div>
            </div>`;
  }
}

export default Car;
