'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const result = {};

  declarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
