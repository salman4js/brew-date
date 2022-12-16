// Importing modules
const brewDate = require("./brewDate/Date.js");

// Get Date in string in the format of {Day Mon Date Year Time};
const getDate = () => brewDate.getDate();

// Get Date in string in the specified format of dd/mm/yyyy || yyyy/mm/dd;
const getFullDate = (props) => brewDate.getFullDate(props);

// Format Date from getDate to getFullDate;
const format = (props) => brewDate.format(props);

// Format date from passing year, month, day into {getDate};
const formatDate = (year, month, date) => {
  const props = {
    year : year,
    month : month,
    date : date
  }
  return brewDate.formatDate(props);
};

// Exporting the functions
module.exports = {
  getDate, getFullDate, format, formatDate
}