import { 
  startOfMonth,
  startOfWeek, 
  endOfMonth, 
  endOfWeek, 
  startOfDay, 
  addDays
} from 'date-fns';

function takeWeek(start = new Date()) {
  let date = startOfWeek(startOfDay(start));

  return function () {
    const week = [...Array(7)].map((_, i) => addDays(date, i));
    date = addDays(week[6], 1);
    return week;
  }
};

export function takeMonth(start = new Date()) {
  let month = [];
  let date = start;
  
  function lastDayOfRange(range) {
    return range[range.length - 1][6];
  };

  return function () {
    const weekGen = takeWeek(startOfMonth(date));
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));
    month.push(weekGen());

    while(lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    const range = month;
    month = [];
    date = addDays(lastDayOfRange(range), 1);

    return range;
  }
};

export function takeSpecificMonths(date = new Date(), method, month) {
  const genMonth = takeMonth(date);
  
  const currentMonth = genMonth();
  const nextMonth = genMonth(method(date, month));
  
  const visibleMonth = [currentMonth, nextMonth];

  return function () {
    return visibleMonth;
  }
};

