function toDigits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      to2Digits(date.getDate()),
      to2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  module.exports = formatDate