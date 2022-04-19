const phoneConvert = (number) => {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < number.length; i++) {
    format = format.replace("x", number[i]);
  }
  return format;
};

console.log(phoneConvert([9, 7, 0, 2, 1, 9, 8, 9, 5, 6]));
