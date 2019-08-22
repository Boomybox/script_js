const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//on recherche dans un premier temps tous les objets dont la year est comprise entre 1970 et 1980
let born70 = entrepreneurs.filter(entrepreneur => entrepreneur.year > 1969 && entrepreneur.year < 1980)

//on affiche ensuite le prénom et le nom de chaque entrepreneur né dans les années 70
console.log("-> Les entrepreneurs nés dans les années 70 sont :")
born70.forEach(entrepreneur => { console.log(`${entrepreneur.first} ${entrepreneur.last}`)});

//pour sauter une ligne dans la console pour que ce soit plus lisible
console.log("")

//on affiche ensuite le prénom et le nom de chaque entrepreneur
console.log("-> On affiche les noms et prénoms de tous les entrepreneurs :")
entrepreneurs.forEach(entrepreneur => { console.log(`${entrepreneur.first} ${entrepreneur.last}`)});

console.log("")

//on calcule l'âge qu'aurait chaque inventeur né pendant les années 70 selon son année de naissance
console.log("-> Âge des entrepreneurs nés dans les années 70 selon leur année de naissance :")
born70.forEach(entrepreneur => { console.log(`En 2019, ${entrepreneur.first} ${entrepreneur.last} aurait ${(2019 - entrepreneur.year)} ans.`)});

console.log("")

//on calcule l'âge qu'aurait chaque inventeur selon son année de naissance, peu importe son année de naissance
console.log("-> Âge de tous les entrepreneurs selon leur année de naissance :")
entrepreneurs.forEach(entrepreneur => { console.log(`En 2019, ${entrepreneur.first} ${entrepreneur.last} aurait ${(2019 - entrepreneur.year)} ans.`)});

console.log("")

//on trie les éléments présents dans l'array entrepreneurs en appelant une fonction qui compare deux arguments (a et b)
let alphabeticOrder = entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last> b.last) { return 1; }
    return 0;
});

//puis on affiche la liste des entrepreneurs (prénom et nom uniquement) par ordre alphabetique du nom de famille
console.log("-> Entrepreneurs par ordre alphabétique du nom de famille :")
alphabeticOrder.forEach(entrepreneur => { console.log(`${entrepreneur.last} ${entrepreneur.first}` )});





