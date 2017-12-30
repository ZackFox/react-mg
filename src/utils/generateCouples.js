import shuffle from './shuffle';

const generateCouples = array => {
  const random = shuffle(array).slice(0, 9);
  const couples = random.concat(random);
  const result = couples.map((item, i) => ({
    id: i,
    value: item,
    isFlipped: true,
    IsMatch: false,
  }));

  console.log(result);
  return shuffle(result);
};

export default generateCouples;
