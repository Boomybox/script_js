//On crée un array contenant des objects de chaque protéine avec leur nom et leurs codons :
const proteins = [
{name: "Sérine", codons: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]},
{name: "Proline", codons: ["CCU", "CCC", "CCA", "CCG"]},
{name: "Leucine", codons: ["UUA", "UUG"]},
{name: "Phénylalaline", codons: ["UUU", "UUC"]},
{name: "Arginine", codons: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]},
{name: "Tyrosine", codons: ["UAU", "UAC"]}];

//On définie les deux arn à transformer :
var arn1 = "CCGUCGUUGCGCUACAGC"
var arn2 = "CCUCGCCGGUACUUCUCG"

//On transforme les strings en array d'éléments de 3 lettres :
let splittedArn1 = arn1.match(/.{1,3}/g);
let splittedArn2 = arn2.match(/.{1,3}/g);

// On affiche l'array crée en séparant les codons de arn1
console.log(splittedArn1)

//On crée un array vide :
let output1 = [];

splittedArn1.forEach(codon => {
	proteins.forEach(prot => {
		if	(prot.codons.includes(codon)) { // Si l'élément contenu dans l'array splittedArn1 correspond à un des codons présents dans l'array "proteins", 
			output1.push(prot.name) // on ajout le nom de la protéine correspondante dans l'array "output"
		}
	});
});

//On joint les mots grâce à des "-" pour compléter la chaîne avec un .join puis on affiche le résultat :
console.log(`ARN1 = ${output1.join("-")}`)


// On affiche l'array crée en séparant les codons de arn2
console.log(splittedArn2)

//On crée un array vide 
let output2 = [];
splittedArn2.forEach(codon => {
	proteins.forEach(prot => {
		if	(prot.codons.includes(codon)) { // Si l'élément contenu dans l'array splittedArn2 correspond à un des codons présents dans l'array "proteins", 
			output2.push(prot.name) // on ajout le nom de la protéine correspondante dans l'array "output"
		}
	});
});

//On joint les mots grâce à des "-" pour compléter la chaîne avec un .join puis on affiche le résultat :
console.log(`ARN2 = ${output2.join("-")}`)
