class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
    this._state = {};
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = this.template;
    this._addListeners();
    return this._element;
  }

  unrender() {
    this._removeListeners();
    this._element = null;
  }

  update() {}

  _addListeners() {}
  _removeListeners() {}
}

export {Component};
