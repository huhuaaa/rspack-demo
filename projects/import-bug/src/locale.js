const loadLocale = (name) => {
  let locale;
  try {
      locale = require('./locale/' + name + '.js');
  } catch(e) {
      locale = {};
  }
  return locale;
};

module.exports = {
  loadLocale,
}