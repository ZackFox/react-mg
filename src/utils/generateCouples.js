import shuffle from './shuffle';

const generateCouples = array => {
  const randArr = shuffle(array).slice(0, 9);
  const couples = randArr.concat(randArr);
  const result = mapToArrayOfObj(couples);
  return shuffle(result);
};

function mapToArrayOfObj(array) {
  return array.map((el, i) => ({
    id: i,
    value: el,
    isFlipped: false,
  }));
}

export default generateCouples;
