// DATE PARSER
const dateParser = (date: string) => {
  const [month, year] = date.split("-");
  const data = new Date(+year, +month - 1, 1);

  const parseDay = `0${data.getDate()}`.slice(-2);
  const parseMonth = `0${data.getMonth() + 1}`.slice(-2);
  const parseYear = `${data.getFullYear()}`;

  const parseDate = `${parseDay}-${parseMonth}-${parseYear}`;
  return parseDate;
};

export default dateParser;
