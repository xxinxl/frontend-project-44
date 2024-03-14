const task5 = () => {
  const num = Math.round(Math.random() * 50) + 2;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

export default task5;
