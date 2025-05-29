const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

const filteredProvinces = provinces.filter(province => province.includes('Cape'));

console.log(filteredProvinces.length);