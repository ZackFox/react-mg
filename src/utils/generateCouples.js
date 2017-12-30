import shuffle from './shuffle';

const generateCouples = array => {
  const random = shuffle(array).slice(0, 9);
  const couples = random.concat(random.map(obj => ({ ...obj })));
  couples.forEach((item, i) => (item.id = i));
  return shuffle(couples);
};

export default generateCouples;
