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

export function spaceDigits(number) {
  // Convert the number to a string
  let str = number.toString();
  let result = "";

  // Calculate the length of the first group (it will be at the end)
  let remainderLength = str.length % 4;
  let groups = [];

  // Process the groups of 4 digits
  for (let i = 0; i < str.length - remainderLength; i += 4) {
    groups.push(str.slice(i, i + 4));
  }

  // Add the remainder group (if any) to the end
  if (remainderLength > 0) {
    groups.push(str.slice(-remainderLength));
  }

  // Join the groups with spaces
  result = groups.join(" ");

  return result;
}

export function cardNumberFormatting(input) {
  // Replace any character that is not a digit with an empty string
  let cleanedString = input.replace(/\D/g, "");

  // Truncate the string to a maximum of 16 characters
  if (cleanedString.length > 16) {
    cleanedString = cleanedString.substring(0, 16);
  }

  return cleanedString;
}
