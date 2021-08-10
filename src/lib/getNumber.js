export const getNumber = num => {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num === 0) {
    return 'zero';
  } else if (num < 20) {
    return ' ' + ones[num];
  } else if (num % 10 === 0) {
    return ' ' + tens[Math.floor(num / 10)];
  } else {
    return ' ' + tens[Math.floor(num / 10)] + '-' + ones[num % 10];
  }
};
