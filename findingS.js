const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const namesWithS = names.map(name => name.includes('S'));

const anyNamesWithS = namesWithS.some(s => s);