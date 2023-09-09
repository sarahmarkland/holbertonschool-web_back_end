// exports this class as the default export of this module
// allows other modules to import it
export default class Airport {
  constructor(name, code) {
    // underscores before property names is a common convention to
    // indicate that these properties are intended to be private and not
    // accessed directly from outside the class
    this._name = name;
    this._code = code;
  }

  toString() {
    return `${this._name} (${this._code})`;
  }
}
