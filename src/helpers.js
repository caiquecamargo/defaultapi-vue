export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
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

function hasOnCart(cart, id) {
  return cart.findIndex(element => element.id === id)
}

export function addItemToCart(cart, item) {
  const { id } = item;
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

  return cart;
}

export function removeItemFromCart(cart, id) {
  const indexOfItemOnCart = hasOnCart(cart, id);
  cart.splice(indexOfItemOnCart, 1);
  return cart;
}