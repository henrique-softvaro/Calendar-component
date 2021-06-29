import { format } from 'date-fns';

import './style.scss';

import { WeekDays } from './WeekDays';

import { BodyProps } from './types';

export const Body = ({ 
  months, 
  setSelectedDate, 
  handleMonthByDay, 
  searchMonthDays,
  searchDaysBeforeToday,
  compareStartDate,
  compareEndDate,
  handleImplicitSelectedDate
}: BodyProps) => {

  return (
    <div className="calendar-body">
      {months.map((month: any, i) => (
        <div key={i} className="calendar-body__month">
          <WeekDays year={handleMonthByDay(month)} />
          {month.map((week: any, indexWeek: number) => (
            <div key={`week-${indexWeek}`} className="calendar-body__week" >
              {week.map((day: Date, indexDay: number) => (
                <div
                  key={`day-${indexDay}`}
                  className="calendar-body__day"
                  onClick={() => setSelectedDate(day)}
                >
                  <time
                    className={`
                      calendar-body__date 
                      calendar-body__${searchMonthDays(day, month)}
                      calendar-body__${compareStartDate(day)}
                      calendar-body__${compareEndDate(day)}
                      calendar-body__${searchDaysBeforeToday(day)}
                      calendar-body__${handleImplicitSelectedDate(day)}
                    `}>
                    {format(day, "dd")}
                  </time>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}


