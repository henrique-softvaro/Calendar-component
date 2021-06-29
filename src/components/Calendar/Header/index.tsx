import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import './style.scss';

type HeaderProps = {
  handlePrevMonths: () => void; 
  handleNextMonths: () => void; 
};

export const Header = ({ handlePrevMonths, handleNextMonths }: HeaderProps) => {
  return (
    <div className="calendar-header">
        <button className="calendar-header__btn" onClick={handlePrevMonths}>
          <IoIosArrowBack className="calendar-header__icon" />
        </button>
        <button className="calendar-header__btn" onClick={handleNextMonths}>
          <IoIosArrowForward className="calendar-header__icon" />
        </button>
    </div>
  )
}