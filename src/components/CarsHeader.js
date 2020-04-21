class CarsHeader {
  constructor() {
    document.querySelector(".main-header").innerHTML = this.render();
  }

  render() {
    return `<h1>Cars in stock</h1>
        <div class="filter-input">
          <input id="filterInput" type="text" placeholder="Type to Filter..." />
        </div>`;
  }
}

export default CarsHeader;
