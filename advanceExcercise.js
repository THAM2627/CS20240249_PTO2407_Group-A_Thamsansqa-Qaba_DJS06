const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  console.log (
    `${products.map(product => product.product)}` + 

    `${products.filter(product => product.product.length <= 5)}` +

    `${products
    .filter(product => product.price)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0)}` +

    `${products.reduce((acc, product) => acc + product.product, '')}` +

    `Highest: ${Math.max(...products.map(product => product.price))}. 
    Lowest: ${Math.min(...products.map(product => product.price))}`+

    `${products.reduce((acc, product) => ({ ...acc, [product.product]: { name: product.product, cost: product.price } }), {})}`
  )

  `console.log(products.filter(product => product.name.length <= 5));

  console.log(
    products
    .filter(product => product.price)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0)
  );

  console.log(
      products.reduce((acc, product) => acc + product.name, '')
  )

  console.log(
    Highest: ${Math.max(...products.map(product => product.price))}
    Lowest: ${Math.min(...products.map(product => product.price))}
  )

  console.log (
    products.reduce((acc, product) => ({ ...acc, [product.id]: { name: product.name, cost: product.price } }), {})
  )`