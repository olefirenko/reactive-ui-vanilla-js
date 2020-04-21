class Component {
  constructor() {
    this._id = Math.random();
    document.componentRegistry[this._id] = this;
  }
}

export default Component;
