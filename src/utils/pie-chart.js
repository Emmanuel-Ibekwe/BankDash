export const findAngles = arr => {
  const numArr = arr.map(el => el.amount);
  const total = numArr.reduce((total, cur) => total + cur);
  const angles = numArr.map(el => (el * 360) / total);
  const percentages = numArr.map(el => (el * 100) / total);
  return arr.map((el, i) => {
    return { ...el, angle: angles[i], percent: percentages[i] };
  });
};

export const getAngleInRad = x => {
  let rad = (x * Math.PI) / 180;
  return parseFloat(rad.toFixed(2));
};
