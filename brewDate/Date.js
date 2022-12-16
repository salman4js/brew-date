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
  var d = new Date(props),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}

// Date object into {getDate} format;
const formatDate = (props) => {
  const event = new Date(props.year, props.month-1, props.date);
  return event.toDateString();
}

module.exports = {
  getDate, getFullDate, format, formatDate
}