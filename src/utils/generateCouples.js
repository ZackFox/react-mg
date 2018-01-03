import shuffle from './shuffle';

const generateCouples = array => {
  const random = shuffle(array).slice(0, 9);
  const couples = random.concat(random);
  const result = shuffle(couples);
  return result.map((item, i) => ({
    id: i,
    value: item,
    isFlipped: true,
    isMatch: false,
  }));
};

export default generateCouples;
