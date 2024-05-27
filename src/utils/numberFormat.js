export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function hideSomeDigits(x) {
  const inputString = `${x}`;
  let dividedStrings = [];
  for (let i = 0; i < inputString.length; i += 4) {
    dividedStrings.push(inputString.slice(i, i + 4));
  }
  dividedStrings[1] = dividedStrings[1].replace(/./g, "*");
  dividedStrings[2] = dividedStrings[2].replace(/./g, "*");

  return dividedStrings.join(" ");
}
