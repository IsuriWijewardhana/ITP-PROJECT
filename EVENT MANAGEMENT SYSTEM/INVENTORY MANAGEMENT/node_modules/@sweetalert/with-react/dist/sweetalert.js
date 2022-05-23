'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var transformer = require('@sweetalert/transformer');
var transformer__default = _interopDefault(transformer);

/*
 * Convert <Element /> to pure DOM node using ReactDOM
 * (remember that ReactDOM.render() is async!)
 */
const getDOMNodeFromJSX = (Element) => {
  const wrapper = document.createElement('div');

  return new Promise((resolve) => {
    ReactDOM.render(Element, wrapper, () => {
      const el = wrapper.firstChild;

      return resolve(el);
    });
  });
};

const swal = (...params) => (
  transformer__default(params, {
    identifier: React.isValidElement,
    transformer: getDOMNodeFromJSX, 
  })
);

transformer.bindActions(swal);

module.exports = swal;
