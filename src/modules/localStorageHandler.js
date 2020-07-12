function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isArray(value) {
  return value && typeof value === "object" && value.constructor === Array;
}

export class LocalStorage {
  static add(item, data) {
    if (isString(data)) {
      window.localStorage[item] = data;
    }

    if (isArray(data)) {
      window.localStorage[item] = JSON.stringify(data);
    }
  }

  static remove(item) {
    window.localStorage.removeItem(item);
  }

  static exists(item) {
    return window.localStorage[item];
  }

  static get(item) {
    try {
      return JSON.parse(window.localStorage[item]);
    } catch {
      return window.localStorage[item];
    }

  }
}