import createType from "@/modules/typeVerificator.js"

function createLocalStorage() {
  const type = createType();

  function add(item, data) {
    if (type.isString(data)) window.localStorage[item] = data;
    if (type.isArray(data)) window.localStorage[item] = JSON.stringify(data);
  }

  function remove(item) {
    window.localStorage.removeItem(item);
  }

  function exists(item) {
    return window.localStorage[item];
  }

  function get(item) {
    try {
      return JSON.parse(window.localStorage[item]);
    } catch {
      return window.localStorage[item];
    }
  }

  return {
    add,
    remove,
    exists,
    get
  }
}

export default createLocalStorage;