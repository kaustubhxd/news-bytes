const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const addZero = (digit) => {
  return digit < 10 ? `0${digit}` : digit;
};

export const parseTime = (dateString, formatted) => {
  const d = new Date(dateString);
  // const now = new Date();

  const obj = {
    time: `${addZero(d.getHours())}:${addZero(d.getMinutes())}`,
    date: d.getDate(),
    day: DAYS[d.getDay()],
    month: MONTHS[d.getMonth()],
    year: d.getFullYear(),
  };

  if (formatted) {
    return `${obj.day} ${obj.date} ${obj.month}, ${obj.year} ${obj.time}`;
  } else {
    return obj;
  }
};
