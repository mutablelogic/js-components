/*
    js-components
    Web Components Design System
    github.com/mutablelogic/js-components
*/

/**
 * Model defines properties
 * @class
*/
export default class Model {
  constructor(data) {
    // Store data
    this.$data = data;

    // Get props
    console.log(this.constructor.properties);
  }
}
