const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
    return str.toUpperCase();
  }, 500);
};

uppercase('save', console.log);

module.exports = uppercase;