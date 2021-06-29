import { FaCalendarAlt } from 'react-icons/fa';

import './style.scss';

import { ActionProps } from './types';

export const Actions = ({ 
  startDate, 
  endDate, 
  rightButtonFocus,
  leftButtonFocus,
  setStartDate, 
  setEndDate, 
  onClick,
  handleFocus,
}: ActionProps) => {

  return (
    <div className="calendar-actions">
      <button 
        className={`
          calendar-actions__btn 
          ${rightButtonFocus ? 'calendar-actions__btn__selected-focus' : ''}`} 
        onClick={onClick} 
        onFocus={() => handleFocus('start')}
      >
        <input
          className={`calendar-actions__input`}
          type="text"
          value={startDate} 
          onChange={(e: any) => 
            setStartDate(e.target.value)
          }
        />
        <FaCalendarAlt className="calendar-actions__icon" />
      </button>

      <button 
        className={`calendar-actions__btn 
          ${leftButtonFocus ? 'calendar-actions__btn__selected-focus' : ''}`} 
        onClick={onClick}
        onFocus={() => handleFocus('end')}
      >
        <input 
          className={`calendar-actions__input`}
          type="text"
          value={endDate}
          onChange={(e: any) => setEndDate(e.target.value)} 
        />
        <FaCalendarAlt className="calendar-actions__icon" />
      </button>
  </div>
  )
}