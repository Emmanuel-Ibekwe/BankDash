export function getYAxisValues(arr1, arr2) {
  const maxNum = Math.max(...arr1, ...arr2);
  const maxY = Math.ceil(maxNum / 100) * 100;

  const avg = maxY / 5;
  const yArr = [];
  for (let i = avg; i <= maxY; i += avg) {
    yArr.push(i);
  }
  yArr.reverse();
  return yArr;
}

export function getMaxValue(arr1, arr2) {
  return Math.max(...arr1, ...arr2);
}

export function capitalizeWords(string) {
  return string
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
