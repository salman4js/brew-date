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

// Difference between two dates 
const diffBetween = (date1, date2) => {
  const props = {
    props1 : date1,
    props2 : date2
  }
  return brewDate.diffBetween(props) + " days ago";
};

// Subtract dates by number
const subDates = (date, number) => {
  const props = {
    date : date,
    number : number
  }
  return brewDate.subDates(props);
}

// Add dates by number 
const addDates = (date, number) => {
  const props = {
    date : date,
    number : number 
  }
  return brewDate.addDates(props);
}

// Get difference in hours 
const ago = (props) => {
  return brewDate.ago(props) + " hours ago";
}

// Get the day of the provided date! 
const getDay = (props, format) => {
  return brewDate.getDay(props, format);
}

// Number of seconds between two dates!
const diffSeconds = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffSeconds(props) + " seconds ago";
  }
  return brewDate.diffSeconds(props) + " seconds";
}

// Number of minutes between two dates!
const diffMinutes = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffMinutes(props) + " minutes ago";
  } else {
    return brewDate.diffMinutes(props) + " minutes";

  }
}

// Number of hours between two dates!
const diffHours = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffHours(props) + " hours ago";
  } else {
    return brewDate.diffHours(props) + " hours";
  }
}

// Number of days between two dates!
const diffDays = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffDays(props) + " days ago";
  } else {
    return brewDate.diffDays(props) + " days";
  }
}

// Number of weeks between two dates!
const diffWeeks = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffWeeks(props) + " weeks ago";
  } else {
    return brewDate.diffWeeks(props) + " weeks";
  }
}

// Number of years between two dates!
const diffYears = (date1, date2) => {
  const props = {
    date1 : date1,
    date2 : date2
  }
  if(date2 == undefined){
    return brewDate.diffYears(props) + " years ago";
  } else {
    return brewDate.diffYears(props) + " years";
  }
}

// Number of months between two dates!
const diffMonths = (date1, date2) => {
    const props = {
      date1:  date1,
      date2: date2
    }
    if(date2 == undefined){
      return brewDate.diffMonths(props) + " months ago";
    } else {
      return brewDate.diffMonths(props) + " months";
    }
}

// Exporting the functions
module.exports = {
  getDate, getFullDate, format, formatDate, diffBetween, 
  subDates, addDates, ago, getDay, diffSeconds, 
  diffMinutes, diffHours, diffDays, diffWeeks, diffYears, diffMonths
}