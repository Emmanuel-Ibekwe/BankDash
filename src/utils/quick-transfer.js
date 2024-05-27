export function groupIntoThrees(arr) {
  let mainArr = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 1 && i !== 0) {
      mainArr.push(subArr);
      subArr = [];

      subArr.push(arr[i]);
    } else {
      subArr.push(arr[i]);
    }
  }
  mainArr.push(subArr);
  return mainArr;
}
