let heroName = "Geralt of Rivia"
let xpQuantity;
let heroLevel;

if (xpQuantity < 1000) {
    heroLevel = "Ferro"
}
else if (xpQuantity > 1001 && xpQuantity < 2000) {
    heroLevel = "Bronze"
}
else if (xpQuantity > 2001 && xpQuantity < 5000) {
    heroLevel = "Prata"
}
else if (xpQuantity > 6001 && xpQuantity < 7000) {
    heroLevel = "Ouro"
}
else if (xpQuantity > 7001 && xpQuantity < 8000) {
    heroLevel = "Platina"
}
else if (xpQuantity > 8001 && xpQuantity < 9000) {
    heroLevel = "Ascendente"
}
else if (xpQuantity > 9001 && xpQuantity < 10000) {
    heroLevel = "Imortal"
}
else if (xpQuantity > 10000) {
    heroLevel = "Radiante"
}
else {
    heroLevel = "Indefinido"
}

console.log("O herói " + heroName + " está no nível de " + heroLevel)