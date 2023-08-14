const products = [
  { id: 3, name: "Product C", price: 20, rating: 4.5, discount: 0.1 },
  { id: 1, name: "Product A", price: 10, rating: 4.2, discount: 0.2 },
  { id: 2, name: "Product B", price: 15, rating: 4.8, discount: 0.05 },
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);
