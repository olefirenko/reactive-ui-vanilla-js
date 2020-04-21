import carsJson from "./mocks/cars.json";
import CarsHeader from "./components/CarsHeader";
import ShoppingBag from "./components/ShoppingBag";
import CarsCollection from "./components/CarsCollection";

// Global component registry to be able binding to each components instance
document.componentRegistry = {};

let MainHeader = new CarsHeader();
let Cars = new CarsCollection(carsJson);
let Cart = new ShoppingBag();

// Function to update UI
function updateUI() {
  document.querySelector(".cars-container").innerHTML = Cars.render();
  document.querySelector(".shoping-total").innerHTML = Cart.render();
}

// :-)
setTimeout(() => updateUI(), 2000);

// Events Listeners
document.getElementById("filterInput").addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;
  if (searchTerm.length > 2) {
    Cars.setSearchTerm(searchTerm);
  } else {
    Cars.setSearchTerm("");
  }

  updateUI();
});

document.addEventListener(
  "carShoppingBagToggle",
  function (e) {
    if (e.detail.isAddedToShoppingBag) {
      Cart.addItem(e.detail);
    } else {
      Cart.removeItem(e.detail);
    }

    updateUI();
  },
  false
);
