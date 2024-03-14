const task1 = () => {
  const q = Math.round(Math.random() * 100);
  // const a = q % 2;
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
};

export default task1;
