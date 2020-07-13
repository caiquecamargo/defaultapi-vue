import createType from "@/modules/typeVerificator.js"
import createLocalStorage from "@/modules/localStorageHandler.js"

function createCart() {
  const type = createType();
  const localStorage = createLocalStorage();

  function hasOnCart(cart, id) {
    return cart.findIndex(element => element.id === id)
  }

  function getId(item) {
    if (type.isNumber(item)) return item;
    if (type.isObject(item)) return item.id;

    return 0;
  }

  function get() {
    return localStorage.get("cart");
  }

  function destroy() {
    localStorage.remove("cart");
  }

  function synchronize(options) {
    options = (typeof options !== "object") ? {} : options;
    options.cart = options.cart || [];
    options.userCart = options.userCart || "";

    if (options) {
      const { cart, userCart } = options;
      if (userCart) {
        if (!localStorage.exists("cart")) localStorage.add("cart", userCart);

        return localStorage.get("cart");
      }

      if (options.cart) localStorage.add("cart", cart);

    } else {
      throw "Cart is empty";
    }
  }

  function exist() {
    return localStorage.exists("cart");
  }

  function addItem(cart, item) {
    const id = getId(item);

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

    synchronize({ cart: cart });
    return cart;
  }

  function removeItem(cart, item) {
    const id = getId(item);

    if (id) {
      const indexOfItemOnCart = hasOnCart(cart, id);

      cart[indexOfItemOnCart].qtyInCart -= 1;

      if (cart[indexOfItemOnCart].qtyInCart <= 0) cart.splice(indexOfItemOnCart, 1);
    }

    synchronize({ cart: cart });
    return cart;
  }

  return {
    addItem,
    removeItem,
    synchronize,
    exist,
    get,
    destroy
  }
}

export default createCart;