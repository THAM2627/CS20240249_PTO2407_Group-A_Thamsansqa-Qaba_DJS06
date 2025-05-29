const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  console.log(products.map(product => product.name));

  console.log(products.filter(product => product.name.length <= 5));

  console.log(
    products
    .filter(product => product.price)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0)
  );

  console.log(
      products.reduce((acc, product) => acc + product.name, '')
  )

  