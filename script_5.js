const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 } ];


console.log(" -> Les livres ont-ils tous été empruntés au moins une fois ?")
//On cherche à savoir le nombre de livres pour lesquels le "rented" est supérieur à 0
let rentedBook = books.filter(book => book.rented > 0 ).length
//Puis on compare aux nombres de livres présents dans l'array. Si le nombre de livres total = le nombre de livres empruntés, ils ont tous été empruntés (logique je sais !)
if (rentedBook === books.length) {console.log("Oui, tous les livres ont bien été empruntés au moins une fois"); }
else {console.log("Non, certains livres n'ont pas encore été empruntés"); }

console.log("")

console.log(" -> quels sont les livres les plus et les moins empruntés de la liste?")

//On cherche le livre le plus emprunté de la liste
let max = 0;
  books.forEach(book => { 
    if (book.rented > max) {
    max = book.rented;}});
let  mostRented = books.find(book => book.rented === max)

console.log(`Le livre le plus emprunté est "${mostRented.title}".`)

//On cherche le libre le moins emprunté de la liste.
//On définie la variable min comme étant égale à la valeur de la variable max qui a été définie plus haut (c'est une variable qui existe et qui ne pourra pas être plus petite que la valeur min qu'on cherche à définir)
let min = max;
  books.forEach(book => {
  if (book.rented < min) { //Si la valeur de book.rented est plus petite que la valeur de min, elle la remplace.
    min = book.rented;}});
let  leastRented = books.find(book => book.rented === min) 

console.log(`Le livre le moins emprunté est "${leastRented.title}".`)

console.log("")

//On cherche le livre dont l'ID = 873495 grâce à une méthode .find que l'on stocke dans la variable wantedBook,
  let wantedBook = books.find(book => book.id === 873495);
// puis on affiche le titre du livre.
  console.log(`Le livre dont l'ID = 873495 est : "${wantedBook.title}".`);

console.log("")

// On cherche l'index du livre que l'on veut supprimer grâce à son ID
let bookIndex = books.findIndex(book => book.id === 133712);
console.log(`Index du livre à supprimer : "${bookIndex}".`)
// puis on supprime le livre grâce à son index (ici index = 0), on veut supprimer un élément à partir de la position zéro :
//books.splice(bookIndex,1)
// puisque son index = 0, on pourrait aussi simplement faire un books.shift(), qui aurait pour effet de supprimer le premier élément de l'array.
books.shift()
let newBooks = books
//on affiche alors le nouvel array, on voit bien que "Gatsby le magnifique" ne fait plus partie de la liste
console.log(newBooks)

console.log("")

//On veut trier la nouvelle liste (sans 'Gatsby le magnifique' car il est supprimé) par ordre alphabétique:
let alphabeticOrder = newBooks.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title> b.title) { return 1; }
    return 0;
});

console.log("-> Titres des livres triés par ordre alphabétique (sans 'Gatsby le magnifique' car il est supprimé) :")
alphabeticOrder.forEach(book => { console.log( book.title )});


