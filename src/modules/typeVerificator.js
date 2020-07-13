function createType() {

  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }

  function isArray(value) {
    return value && typeof value === "object" && value.constructor === Array;
  }

  function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  return {
    isString,
    isArray,
    isNumber,
    isObject
  }
}

export default createType;