const movesData1 = ["F", "B"];
const movesData2 = ["U", "D"];
const movesData3 = ["L", "R"];
const separators = ["' ", "2 ", " "];
const scrambleLength = 20;

export function resetScramble(){
    let scrambleText = document.querySelector(".cube-scramble-move");
    let myScramble = getScramble();
    scrambleText.textContent = myScramble;
}

function getScramble() {
  let scramble = "";

  let moves1 = [...movesData1];
  let moves2 = [...movesData2];
  let moves3 = [...movesData3];

  let randomMove;
  let separator;

  for (let i = 0; i < scrambleLength; i++) {
    if (i == 0) {
      randomMove = getRandom(moves1.concat(moves2, moves3));
    } else {
      if (movesData1.includes(randomMove)) {
        removeArrayElement(randomMove, moves1);

        randomMove = getRandom(moves1.concat(moves2, moves3));

        moves2 = [...movesData2];
        moves3 = [...movesData3];
      } else if (movesData2.includes(randomMove)) {
        removeArrayElement(randomMove, moves2);

        randomMove = getRandom(moves1.concat(moves2, moves3));

        moves1 = [...movesData1];
        moves3 = [...movesData3];
      } else {
        removeArrayElement(randomMove, moves3);

        randomMove = getRandom(moves1.concat(moves2, moves3));

        moves1 = [...movesData1];
        moves2 = [...movesData2];
      }
    }

    if (i < scrambleLength) {
      separator = getRandom(separators);
    } else {
      separator = "";
    }

    scramble += randomMove + separator;
  }

  return scramble;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function removeArrayElement(e, array) {
  let index = array.indexOf(e);
  if (index > -1) {
    array.splice(index, 1);
  }
}
