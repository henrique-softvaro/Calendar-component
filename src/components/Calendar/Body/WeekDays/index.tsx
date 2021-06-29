import './style.scss';

import { WeekDaysProps } from './types';

const weekDays = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
];

export const WeekDays = ({ year }: WeekDaysProps) => {
  return (
    <>
    <h2>{year}</h2>
    <div className="calendar-weekDays">
      <div className="calendar-weekDays__container-week">
        {weekDays.map(day => (
          <span className="calendar-weekDays__day" key={day}>{day}</span>
        ))}
      </div>
    </div>
    </>
  )
}