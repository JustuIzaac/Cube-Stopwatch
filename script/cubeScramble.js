const MOVESDATA1 = ["F", "B"];
const MOVESDATA2 = ["U", "D"];
const MOVESDATA3 = ["L", "R"];

const SPACE = "&nbsp&nbsp&nbsp;";
const SEPARATORS1 = ["'", "2", ""];
const ENDATTRIBUTES = ["w", ""];
const FRONTATTRIBUTES = ["3", ""];

export function resetScramble(cubeDimension) {
  let scrambleText = document.querySelector(".cube-scramble-move");
  let myScramble = getScramble(cubeDimension);
  console.log(myScramble);
  scrambleText.innerHTML = myScramble;
}

function getScramble(cubeDimension) {
  let scrambleLength = 3*cubeDimension**2;

  let moves1 = [...MOVESDATA1];
  let moves2 = [...MOVESDATA2];
  let moves3 = [...MOVESDATA3];

  let scramble = "";

  let randomBasicMove;
  let randomMove;
  let separator;

  for (let i = 0; i < scrambleLength; i++) {
    if (i == 0) {
      randomBasicMove = getRandom(moves1.concat(moves2, moves3));
    } else {
      if (MOVESDATA1.includes(randomBasicMove)) {
        removeArrayElement(randomBasicMove, moves1);

        randomBasicMove = getRandom(moves1.concat(moves2, moves3));

        moves2 = [...MOVESDATA2];
        moves3 = [...MOVESDATA3];
      } else if (MOVESDATA2.includes(randomBasicMove)) {
        removeArrayElement(randomBasicMove, moves2);

        randomBasicMove = getRandom(moves1.concat(moves2, moves3));

        moves1 = [...MOVESDATA1];
        moves3 = [...MOVESDATA3];
      } else {
        removeArrayElement(randomBasicMove, moves3);

        randomBasicMove = getRandom(moves1.concat(moves2, moves3));

        moves1 = [...MOVESDATA1];
        moves2 = [...MOVESDATA2];
      }
    }

    if (cubeDimension >= 6) {
      randomMove =
        getRandom(FRONTATTRIBUTES) + randomBasicMove + getRandom(ENDATTRIBUTES);
    } else if (cubeDimension >= 4) {
      randomMove = randomBasicMove + getRandom(ENDATTRIBUTES);
    } else{
      randomMove = randomBasicMove;
    }

    if (i < scrambleLength) {
      separator = getRandom(SEPARATORS1);
    } else {
      separator = "";
    }

    scramble += randomMove + separator + SPACE;
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
