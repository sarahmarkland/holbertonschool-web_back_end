export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    return `${this._name} (${this._code})`;
  }

  static fromJSON(json) {
    return new Airport(json.name, json.code);
  }

  toJSON() {
    return {
      name: this._name,
      code: this._code,
    };
  }
}
