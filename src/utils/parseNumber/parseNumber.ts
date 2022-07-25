const hashName: {
  [key: number]: string;
} = {
  2: "тыс.",
  3: "млн.",
  4: "млрд.",
};

const parseNumber = (number: number) => {
  const digits = String(number)
    .split("")
    .reverse()
    .join("")
    ?.match(/.{1,3}/g);
  const digitCount = digits?.length;

  if (digitCount) {
    const digitsCollection = digits
      .map((item) => {
        return item.split("").reverse().join("");
      })
      .reverse();

    if (digitCount <= 1) {
      return digitsCollection;
    }

    return `${digitsCollection[0]},${digitsCollection[1][0]} ${
      hashName[digitCount] ?? ""
    }`;
  }
  return number;
};

export default parseNumber;
