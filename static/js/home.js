const game_con = document.getElementById("game");

const arr = [1, 1, 2, 2, 3, 3];
const shuffleArr = shuffleArray(arr);

for(let i = 1; i<=6; i++){
let card = document.createElement("div");
card_ids = card.id = i;

card_val = card.value = shuffleArr[i];
console.log(card_ids, card_val);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}