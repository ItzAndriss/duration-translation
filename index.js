function duration(time, locale) {
    const duration = parseInt(time);
    const unit = time.slice(-1);
    
    let message;
    if (unit === 'mo') {
        message = getMessage('months', duration, locale);
    } else if (unit === 'm') {
        message = getMessage('minutes', duration, locale);
    } else if (unit === 's') {
      message = getMessage('seconds', duration, locale);
    } else if (unit === 'd') {
      message = getMessage('days', duration, locale);
    } else if (unit === 'h') {
      message = getMessage('hours', duration, locale);
    } else if (unit === 'y') {
      message = getMessage('years', duration, locale);
    } else {
      message = getMessage('default', duration, locale);
    }
    return `${duration} ${message}`;
}

function getMessage(key, duration, locale) {
  const translations = require(`./locales/${locale}.json`)[key];
  const singular = translations['singular'];
  const plural = translations['plural'];

  if (duration === 1) {
    return singular;
  } else {
    return plural;
  }
}


module.exports = duration;