import { format } from 'date-fns';

import './style.scss';

import { CompareDates  } from '../../../helpers/compareDates';

type BodyProps = {
  month: Date[][];
}

export const Body = ({ month }: BodyProps) => {
  return (
    <div className="calendar-body">
      {month.map((weeks, i) => (
        <div key={i} className="calendar-body__week">
          {weeks.map((day, i) => (
            <div key={i} className="calendar-body__day">
              <time className={`calendar-body__date calendar-body__${CompareDates(day)}`}  >
                {format(day, "dd")}
              </time>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}


