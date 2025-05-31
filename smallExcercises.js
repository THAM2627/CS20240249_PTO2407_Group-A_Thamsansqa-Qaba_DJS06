//filtered provinces that have "Cape"
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

const filteredProvinces = provinces.filter(province => province.includes('Cape'));

console.log(filteredProvinces.length);

//Find names with "S"
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const namesWithS = names.map(name => name.includes('S'));

const anyNamesWithS = namesWithS.some(s => s);

console.log(anyNamesWithS);

