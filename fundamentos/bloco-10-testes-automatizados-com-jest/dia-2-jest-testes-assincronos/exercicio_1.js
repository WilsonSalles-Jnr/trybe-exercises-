const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  uppercase('ola',console.log)

  module.exports = uppercase;