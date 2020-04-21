/**
 * Format nymbber into a currency value for given locale
 *
 * @param {number} value
 * @param {string} locale
 * @param {string} currency
 */
const formatter = (value, locale = "en-SG", currency = "SGD") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

export default formatter;
