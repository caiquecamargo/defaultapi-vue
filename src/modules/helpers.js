export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function mapFields(options) {
  const object = {};
  const firstBase = options.base[0];
  const secondBase = options.base[1];
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = (options.base.length > 1) ? {
      get() {
        return this.$store.state[firstBase][secondBase][field];
      },
      set(value) {
        const secondBaseData = Object.assign(this.$store.state[firstBase][secondBase], {
          [field]: value
        });
        this.$store.commit(options.mutation, { [secondBase]: secondBaseData });
      }
    }
      :
      {
        get() {
          const firstBase = options.base[0];
          return this.$store.state[firstBase][field];
        },
        set(value) {
          this.$store.commit(options.mutation, { [field]: value });
        }
      }
  }
  return object;
}

export function compareTwoArrays(arrayOne, arrayTwo) {
  if (arrayOne.length != arrayTwo.length) return 0;
  let flag = 1;
  arrayOne.forEach(element => {
    if (arrayTwo.indexOf(element) < 0) flag = 0;
  });

  return flag;
}

export function removeHTMLElements(text) {
  if (text) return text.replace(/(<[\w|/]+>)+/g, '');
}

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

function hasOnCart(cart, id) {
  return cart.findIndex(element => element.id === id)
}

export function addItemToCart(cart, item) {
  let id = null;

  if (isNumber(item)) id = item;

  if (isObject(item)) id = item.id;

  if (id) {
    const indexOfItemOnCart = hasOnCart(cart, id);

    if (indexOfItemOnCart >= 0) {
      cart[indexOfItemOnCart].qtyInCart += 1;
    } else {
      const newItem = {
        id: id,
        qtyInCart: 1,
        item: item
      }
      cart.push(newItem);
    }
  }

  return cart;
}

export function removeItemFromCart(cart, item) {
  let id = null;

  if (isNumber(item)) id = item;

  if (isObject(item)) id = item.id;

  if (id) {
    const indexOfItemOnCart = hasOnCart(cart, id);

    cart[indexOfItemOnCart].qtyInCart -= 1;

    if (cart[indexOfItemOnCart].qtyInCart <= 0) cart.splice(indexOfItemOnCart, 1);
  }

  return cart;
}