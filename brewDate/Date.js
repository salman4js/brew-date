// brew - date

// Get date
const getDate = () => {
  const current = new Date();
  if(current.getDate.toString().length > 1){
    const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
    return Date(date);
  } else {
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${"0"+current.getDate()}`;
    return Date(date);
  }
}

// Get day, date, time!
const getDayTime = (props) => {
  var currentDate = new Date();

  // Split the date into its various components
  var day = getDay(currentDate, "ddd");
  var date = currentDate.getDate().toString();
  var month = currentDate.getMonth().toString();
  var year = currentDate.getFullYear().toString();
  var time = currentDate.getHours().toString() + ":" + currentDate.getMinutes().toString() + ":" + currentDate.getSeconds().toString();

  // Create an object to store the date components
  var dateComponents = {
    day: day,
    date: date,
    month: month,
    year: year,
    time: time
  };
  
  var values = props.map(function(prop) {
    return dateComponents[prop];
  });
  
  return values.join(' ');
}


const getFullDate = (props) => {
  const current = new Date();
  var currentDate = current.getDate.toString().length > 1;
  if(props == "yyyy/mm/dd"){
    if(currentDate){
      const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
      return date;
    } else {
      const date = `${current.getFullYear()}/${current.getMonth()+1}/${"0"+current.getDate()}`;
      return date;
    }
  } else if(props == "dd/mm/yyyy"){
    if(currentDate){
      const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
      return date;
    } else {
      const date = `${current.getDate()}/${current.getMonth()+1}/${"0"+current.getFullYear()}`;
      return date;
    }
  } else {
    return "Please check your format or brew-date doesn't support this format yet."
  }
}

// convert from {getDate} into {getFullDate};
const format = (props) => {
  var d = new Date(props.date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
        
    if(props.format === "yyyy/mm/dd"){
      return [year, month, day].join('/');
    } else if(props.format === "dd/mm/yyyy"){
      return [day, month, year].join('/');
    } else {
      return "Please provide valid format as the second parameter"
    }
}

// Date object into {getDate} format;
const formatDate = (props) => {
  const event = new Date(props.year, props.month-1, props.date);
  return event.toDateString();
}

// Number of days between two dates!
const diffBetween = (props) => {
  const date1 = new Date(props.props1);
  const date2 = new Date(props.props2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}

// Subtract dates by number
const subDates = (props) => {
  const date = new Date(props.date);
  date.setDate(date.getDate() - props.number)
  return date.toDateString();
}

// Subtract dates by number and return a day!
const subDay = (props) => {
  return getDay(subDates(props));
}

// Add dates by numbers 
const addDates = (props) => {
  const date = new Date(props.date);
  date.setDate(date.getDate() + props.number)
  return date.toDateString();
}

// Number of hours between current date and the provided date! 
const ago = (props) => {
    const date = new Date();
    const propsDate = new Date(props);
    var diff = (propsDate.getTime() - date.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}

// Get day by date 
const getDay = (props, format) => {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(props);
  const day = days[date.getDay()];
  if(format == "dddd" || format == undefined){
    return day;
  } else if(format == "ddd"){
    return date.toString().split(' ')[0];
  } else {
    return "Please check your format!";
  }
}

// Number of seconds between two dates!
const diffSeconds = (props) => {
  if(props.date2 == undefined){
    const date2 = Date.now();
    const date1 = new Date(props.date1).getTime();
    // 1 second = 1000 ms;
    const diff = Math.floor((date2 - date1) / 1000);
    return Math.abs(diff);
  } else {
    const date1 = new Date(props.date1).getTime();
    const date2 = new Date(props.date2).getTime();
    // 1 second = 1000 ms;
    const diff = Math.floor((date2 - date1) / 1000);
    return Math.abs(diff);
  }
}

// Number of minutes between two dates!
const diffMinutes = (props) => {
  if(props.date2 == undefined){
    props[props.date2] = new Date();
    let seconds = diffSeconds(props);
    // 1 minute = 60 seconds!
    let minutesDiff = Math.floor(seconds / 60);
    return Math.abs(minutesDiff);
  } else {
    let seconds = diffSeconds(props);
    // 1 minute = 60 seconds!
    let minutesDiff = Math.floor( seconds / 60 );
    return Math.abs(minutesDiff);
  }
}

// Number of hours between two dates!
const diffHours = (props) => {
  const minutes = diffMinutes(props);
  // 1 hour = 60 minutes!
  const diffHours = Math.floor(minutes / 60);
  return Math.abs(diffHours);
}

// Number of days between two dates!
const diffDays = (props) => {
  const hours = diffHours(props);
  // 1 day  = 24 hours!
  const diffDays = Math.floor( hours / 24);
  return Math.abs(diffDays);
}

// Number of week between two dates!
const diffWeeks = (props) => {
  const weeks = diffDays(props);
  // 1 week = 7 days!
  const diffWeeks = Math.floor( weeks / 7);
  return Math.abs(diffWeeks);
}

// Number of years between two dates!
const diffYears = (props) => {
  if(props.date2 == undefined){
    const date1 = new Date(props.date1);
    const date2 = new Date();
    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    return Math.abs(yearsDiff);
  } else {
    const date1 = new Date(props.date1);
    const date2 = new Date(props.date2);
    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    return Math.abs(yearsDiff);
  }
}

// Number of month between two dates!
const diffMonths = (props) => {
  const years = diffYears(props);
  const date1 = new Date(props.date1);
  if(props.date2 == undefined){
    const date2 = new Date();
    const months = (years * 12) + (date2.getMonth() - date1.getMonth());
    return Math.abs(months); 
  } else {
    const date2 = new Date(props.date2)
    const months = (years * 12) + (date2.getMonth() - date1.getMonth());
    return Math.abs(months);
  }
}

// Get dates inbetween of two dates!
const getBetween = (props) => {
      var arr = new Array();
      var dt = new Date(props.start);
      while (dt <= new Date(props.end)) {
          const props = {
            date  : new Date(dt),
            format : "yyyy/mm/dd"
          }
          arr.push(format(props));
          dt.setDate(dt.getDate() + 1);
      }
      return arr;
      // var result = new Array();
      // // Converting the date object array values into an formatable array value!
      // for(i = 0; i <= arr.length - 1; i++){
      //   result.push(format(arr[i]));
      // }
      // return result;
}


module.exports = {
  getDate, getDayTime, getFullDate, format, formatDate, diffBetween, 
  subDates, addDates, ago, getDay, diffSeconds, diffMinutes, 
  diffHours, diffDays, diffWeeks, diffYears, diffMonths, getBetween, subDay
}