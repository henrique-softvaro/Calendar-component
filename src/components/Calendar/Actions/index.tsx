import { FaCalendarAlt } from 'react-icons/fa';

import './style.scss';

type ActionProps = {
  startDate: string;
  endDate: string;
  setStartDate: (e: any ) => void;
  setEndDate: (e: any) => void;
  onClick: () => void;
}

export const Actions = ({ 
  startDate, 
  endDate, 
  setStartDate, 
  setEndDate, 
  onClick 
}: ActionProps) => {

  return (
    <div className="calendar-actions">
      <button className="calendar-actions__btn">
        <input
          className="calendar-actions__input"
          onClick={onClick}
          type="text"
          value={startDate} 
          onChange={(e: any) => 
            setStartDate(e.target.value)
          }
        />
        <FaCalendarAlt className="calendar-actions__icon" />
      </button>

      <button className="calendar-actions__btn">
        <input 
          className="calendar-actions__input"
          onClick={onClick}
          type="text" 
          value={endDate} 
          onChange={(e: any) => setEndDate(e.target.value)} 
        />
        <FaCalendarAlt className="calendar-actions__icon" />
      </button>
  </div>
  )
}