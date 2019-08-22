// on demande un nombre à l'utilisateur que l'on stocke dans une variable "n"
let n = prompt("De quel nombre veux-tu calculer la factorielle ?")

// on définit la fonction factorielle
function factorielle(n){
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorielle(n - 1));
}

// on définit la variable result dans laquelle sera stockée le factiorielle du nombre choisi par l'utilisateur
let result = factorielle(n)

// on affiche le résultat obtenu dans la console Javascript
 console.log(`Le factorielle de ${n} est ${result}`);