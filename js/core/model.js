/*
    js-components
    Web Components Design System
    github.com/mutablelogic/js-components
*/
// eslint-disable-next-line import/no-cycle
import Controller from './controller';

/**
 * Model defines properties
 * @class
*/
export default class Model {
  constructor(data) {
    // Set properties
    this.$data = data;

    // Set prototype
    Controller.setPrototypeOf(Object.getPrototypeOf(this), this.constructor);
  }

  /* Get property value, casting it to the correct value type */
  get(key) {
    const p = this.$properties[key];
    if (!p) {
      throw new Error(`${key} is not a valid property`);
    }
    return Model.cast(this.$data[key], p);
  }

  /* Set property value, casting it to the correct value type */
  // eslint-disable-next-line class-methods-use-this
  set(key, value) {
    const p = this.$properties[key];
    if (!p) {
      throw new Error(`${key} is not a valid property`);
    }
    this.$data[key] = Model.cast(value, p);
  }

  /* Return key for model */
  get key() {
    return Model.key(this);
  }

  /*
   * Return the model as a string
   */
  toString() {
    let str = `<${this.$name}`;
    Object.keys(this.$properties).forEach((key) => {
      const value = this[key];
      if (value === null || value === undefined) {
        str += ` ${key}=<nil>`;
      } else if (typeof value === 'string') {
        str += ` ${key}=${value.quote()}`;
      } else {
        str += ` ${key}=${value}`;
      }
    });
    return `${str}>`;
  }

  /*
   * Return the model as JSON
   */
  toJSON() {
    const json = {};
    Object.keys(this.$properties).forEach((key) => {
      json[key] = this[key];
    });
    return JSON.stringify(json);
  }

  /*
   * Determine equality between two objects
   */
  static equals(a, b) {
    // TODO
    return (a === b);
  }

  /*
   * Return key for an object
   */
  static key(a) {
    if (!(a instanceof Model)) {
      throw Error('hashCode() can only be called on a Model');
    }
    return `${a.$properties.key || Model.hashCode(a)}`;
  }

  /*
   * Return hashcode for an object
   */
  static hashCode(a) {
    if (!(a instanceof Model)) {
      throw Error('hashCode() can only be called on a Model');
    }
    return a.toJSON().hashCode();
  }

  /*
   * Cast a value to a property type
   */
  static cast(value) {
    // TODO
    return value;
  }
}
