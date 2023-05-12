// Importing modules
const brewDate = require("./brewDate/Date.js");

// Get Date in string in the format of {Day Mon Date Year Time};
const getDate = () => brewDate.getDate();

const getDayTime = (props1, props2, props3, props4, props5) =>  {
  const array = [props1, props2, props3, props4, props5];
  return brewDate.getDayTime(array);
};

// Get Date in string in the specified format of dd/mm/yyyy || yyyy/mm/dd;
const getFullDate = (props) => brewDate.getFullDate(props);

// Format Date from getDate to getFullDate;
const format = (date, format) => {
  const props = {
    date : date, 
    format : format
  }
  return brewDate.format(props);
}
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

// Subtract dates by number and return a day!
const subDay = (date, number) => {
  const props = {
    date : date,
    number : number
  }
  if(number === 1){
    return "Yesterday";
  }
  else if(number <= 7){
    return "Last " +brewDate.subDay(props);
  } else {
    return brewDate.subDay(props);
  }
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

// Get the dates inbetween of two dates!
const getBetween = (start, end) => {
  const props = {
    start : start,
    end : end 
  }
  if(end == undefined){
    return "getBetween function needs start date and end date";
  } else {
    return brewDate.getBetween(props);
  }
}

// Get all the dates from the month mentioned!
const getAllDatesOfMonth = (year, month) => {
  if(year && month !== undefined){
    return brewDate.getAllDatesOfMonth(year, month);
  } else {
    return "Please provide valid input!"
  }
}

// Get current time in AM and PM format!
const getTime = () => {
  const date = new Date();
  const time  = new Date().toLocaleTimeString();
  return time;
}

// Convert 12 hours time format into 24 hour time format and vice versa!
function convert12to24(timestart){
    if(timestart !== undefined){
       return brewDate.convert12to24(timestart);
    } else {
      return "Please provide a time!"
    }
}

// Convert 12 hours time format into 24 hour time format and vice versa!
function convert24to12(timestart){
    if(timestart !== undefined){
       return brewDate.convert24to12(timestart);
    } else {
      return "Please provide a time!"
    }
}

// Get inbetween time based on the time provide!
function getTimeBetween(start, end){
  if(start === undefined || end === undefined){
    return "Please provide a valid start and end time"
  } else {
    return brewDate.getTimeBetween(start, end);
  }
}

// Handle time format --> Convert 12 to 24 and vice versa!
function timeFormat(time){
  if(time !== undefined){
    return brewDate.timeFormat(time);
  } else {
    return "Please provide a valid time!"
  }
}

// Round the time up!
function roundTime(time){
  if(time !== undefined){
    return brewDate.roundTime(time);
  } else {
    return "Please provide a valid time";
  }
}

// Exporting the functions
module.exports = {
  getDate, getDayTime, getFullDate, format, formatDate, diffBetween, 
  subDates, addDates, ago, getDay, diffSeconds, 
  diffMinutes, diffHours, diffDays, diffWeeks, diffYears, diffMonths, getBetween, subDay, getAllDatesOfMonth, 
  getTime, convert12to24, convert24to12, getTimeBetween, timeFormat, roundTime
}
