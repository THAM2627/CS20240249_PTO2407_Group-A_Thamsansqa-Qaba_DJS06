const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const nameReduction = names.reduce((acc, name) => acc + name, '');

console.log(nameReduction);