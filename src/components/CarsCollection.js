import Car from "./Car";

class CarsCollection {
  constructor(jsonData) {
    this.cars = [];
    this.searchTerm = "";

    this.loadFromJson(jsonData);
  }

  loadFromJson(data) {
    data.forEach(item => {
      this.cars.push(new Car(item));
    });
  }

  setSearchTerm(term) {
    this.searchTerm = term;
  }

  render() {
    const filteredList = this.cars.filter(car =>
      car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (filteredList.length === 0) {
      return '<div class="no-cars">No cars with that name were found :(</div>';
    }

    return filteredList.map(car => car.render()).join("");
  }
}

export default CarsCollection;
