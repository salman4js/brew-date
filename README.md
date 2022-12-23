A simple javascript package that gives a decent workaround with Dates.

### Keep it clean and simple - Development!

Install brew-date by running 

### npm install brew-date

### getFullDate("yyyy/mm/dd")

getFullDate takes up single parameter which is the format of the date. It takes either {"yyyy/mm/dd" || "dd/mm/yyyy"}.

getFullDate(format);

### format()

format takes up two parameter, First one is the date and second one is the format {"yyyy/mm/dd" || "dd/mm/yyyy"}.

format(date, format);

### formatDate()

formatDate take up parameter as number in the order of year, month, date.

formatDate(year, month, date); 

### diffBetween()

diffBetween takes up two parameter to return the difference between of two dates in days.

diffBetween(date1, date2);

It takes current date as default second date if not provided.

### subDates()

subDates takes up a two parameter, it subtracts the provided date with a number. Returns a date.

subDates(date, number);

### subDay()

subDay takes up a two parameter, it subtracts the the provided date with the number, returns a day.


### addDates()

addDates takes up a two parameter, it adds the provided date with the number, return a date.

### ago()

ago takes up a two date parameter with or without time.

ago(date1 with time, date2 with time);

It takes current date as the default second date if not provided.

It takes date's 12:00 as the default time if not provided.

### getDay()

getDay takes a only one parameter as date and return the day of provided date.

getDay(date)

### diffSeconds()

diffSeconds takes up two paramter with time to return difference betwen of two dates in seconds.

diffSeconds(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00, if time has not provided.

### diffMinutes()

diffMinutes takes up two parameter with time to return difference between two dates in minutes.

diffMinutes(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### diffHours()

diffHours takes up two parameter with time to return difference between two dates in Hours.

diffHours(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### diffDays()

diffDays takes up two parameter with time to return difference between two dates in Days.

diffDays(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### diffWeeks()

diffWeeks takes up two parameter with time to return difference between two dates in weeks

diffWeeks(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### diffYears()

diffYears takes up two parameter with time to return difference between two dates in Years.

diffYears(date1 with time, date2 with time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### diffMonths()

diffMonths takes up two parameter with time to return difference between two dates in Months.

diffMonths(date1 with time, date2 witht time);

Default date 2 would be current date and time if not provided.

default time would be 12:00 if not provided.

### getBetween()

getBetween takes up two parameter to return the dates between the two provided dates.

getBetween(date1, date2);

Between dates would be return in array format.

