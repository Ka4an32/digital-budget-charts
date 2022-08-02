const hashName: {
  [key: number]: string;
} = {
  2: "тыс.",
  3: "млн.",
  4: "млрд.",
};

const parseNumber = (number: number) => {
  const digits = String(number.toFixed(0))
    .split("")
    .reverse()
    .join("")
    ?.match(/.{1,3}/g);

  const numb =
    digits
      ?.map((item) => {
        return item.split("").reverse().join("");
      })
      .reverse() ?? "";

  const digitCount = digits?.length;
  return {
    numb,
    digitCount,
  };
};

const getParseNumber = (number: number) => {
  const { numb = [] } = parseNumber(number);
  if (numb) {
    const int = `${numb[0]}`;
    const fractional = numb[1] ? `,${numb[1][0]}` : "";
    return `${int}${fractional}`;
  }
};

const bindNumberUnits = (number: number) => {
  const { digitCount, numb = [] } = parseNumber(number);
  if (digitCount) {
    if (digitCount <= 1) {
      return numb;
    }
    return `${numb[0]},${numb[1][0]}\r\n${hashName[digitCount] ?? ""}`;
  }
  return number;
};

export { bindNumberUnits, getParseNumber };
