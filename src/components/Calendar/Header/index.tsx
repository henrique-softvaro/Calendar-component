import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import './style.scss';

const weekDays = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
]

export const Header = () => {

  return (
    <div className="calendar-header">
      {/* <button className="calendar-header__btn">
        <IoIosArrowBack className="calendar-header__icon"/>
      </button> */}
      <div className="calendar-header__container-week">
        {weekDays.map(day => (
          <span className="calendar-header__day" key={day}>{day}</span>
        ))}
      </div>
      {/* <button className="calendar-header__btn">
        <IoIosArrowForward  className="calendar-header__icon"/>
      </button> */}
    </div>
  )
}