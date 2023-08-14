const products = [
  { id: 3, name: "Product C", price: 20, rating: 4.5, discount: 0.1 },
  { id: 1, name: "Product A", price: 10, rating: 4.2, discount: 0.2 },
  { id: 2, name: "Product B", price: 15, rating: 4.8, discount: 0.05 },
];

// Sort by id
products.sort((a, b) => a.id - b.id);
console.log(products);

// Sort by name
products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);

// Sort by price
products.sort((a, b) => a.price - b.price);
console.log(products);

// Sort by rating
products.sort((a, b) => b.rating - a.rating);
console.log(products);

// Sort by discount
products.sort((a, b) => b.discount - a.discount);
console.log(products);
