import shuffle from './shuffle';

const generateCouples = array => {
  const randArr = shuffle(array).slice(0, 9); // meke random frgment from array of strings
  const couples = randArr.concat(randArr); // meke coupeles
  const result = mapToArrayOfObj(couples); // get array of objects
  return shuffle(result); // randomize couples
};

function mapToArrayOfObj(array) {
  return array.map((el, i) => ({
    id: i,
    value: el,
    isFlipped: false,
  }));
}

export default generateCouples;
