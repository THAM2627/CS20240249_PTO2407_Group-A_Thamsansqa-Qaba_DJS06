const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

const sortedProvinces = provinces.sort((a,b)=>a.localeCompare(b));

console.log(sortedProvinces);