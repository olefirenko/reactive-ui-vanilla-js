import ShoppingBag from "../components/ShoppingBag";
import Car from "../components/Car";

describe("Shopping Bag component", () => {
  document.componentRegistry = {};
  document.nextId = 0;

  let Cart = new ShoppingBag();
  const newCar = new Car({
    modelClass: "A",
    version: "200",
    price: {
      amount: "29500.00",
      currency: "SGD",
      locale: "en-SG",
    },
    imagePath: "/assets/carImages/A200.jpg",
  });

  it("has zero items and zero total by default ", () => {
    expect(Cart.items.length).toBe(0);
    expect(Cart.getTotal()).toBe(0);

    // Intl.NumberFormat behaves incorrectly in Node
    expect(Cart.getTotalFormatted()).toContain("SGD");
    expect(Cart.getTotalFormatted()).toContain("0.00");
  });

  it("can add item to the shopping bag", () => {
    Cart.addItem(newCar);

    expect(Cart.items.length).toBe(1);
    expect(Cart.getTotal()).toBe(29500.0);

    // Intl.NumberFormat behaves incorrectly in Node
    expect(Cart.getTotalFormatted()).toContain("SGD");
    expect(Cart.getTotalFormatted()).toContain("29,500.00");
  });

  it("can render template", () => {
    // Intl.NumberFormat behaves incorrectly in Node
    expect(Cart.render()).toContain("SGD");
    expect(Cart.render()).toContain("29,500.00");
  });

  it("can remove item from the shopping bag", () => {
    Cart.removeItem(newCar);
    expect(Cart.items.length).toBe(0);
  });
});
