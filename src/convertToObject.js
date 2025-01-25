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
    const parts = declaration.split(':').map((part) => part.trim());

    if (parts.length === 2) {
      const [key, value] = parts;

      if (key && value) {
        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
