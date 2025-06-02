import Cart from "../blocks/Cart";

// Замокаем Modal
jest.mock("../blocks/Modal.js", () => {
  return jest.fn().mockImplementation(() => ({
    setTitle: jest.fn(),
    setBody: jest.fn(),
    open: jest.fn(),
    close: jest.fn(),
    elem: {
      addEventListener: jest.fn(),
    },
  }));
});

// Простая заглушка для cartIcon
const mockCartIcon = {
  elem: document.createElement("div"),
  update: jest.fn(),
};

describe("Cart class", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart(mockCartIcon);
    mockCartIcon.update.mockClear();
  });

  const product = {
    id: "product1",
    name: "Test Product",
    price: 100,
    image: "test.jpg",
  };

  test("should add a new product to the cart", () => {
    cart.addProduct(product);

    expect(cart.cartItems).toHaveLength(1);
    expect(cart.cartItems[0].product.id).toBe(product.id);
    expect(cart.cartItems[0].count).toBe(1);
    expect(mockCartIcon.update).toHaveBeenCalledWith(cart);
  });

  test("should increase count if product already exists", () => {
    cart.addProduct(product);
    cart.addProduct(product);

    expect(cart.cartItems).toHaveLength(1);
    expect(cart.cartItems[0].count).toBe(2);
    expect(mockCartIcon.update).toHaveBeenCalledTimes(2);
  });

  test("should update product count and remove if zero", () => {
    cart.addProduct(product);
    cart.updateProductCount(product.id, -1);

    expect(cart.cartItems).toHaveLength(0);
    expect(mockCartIcon.update).toHaveBeenCalledTimes(2);
  });

  test("should calculate total price correctly", () => {
    const product2 = { ...product, id: "product2", price: 50 };
    cart.addProduct(product); // count = 1
    cart.addProduct(product2); // count = 1

    expect(cart.getTotalPrice()).toBe(150);
  });
});
