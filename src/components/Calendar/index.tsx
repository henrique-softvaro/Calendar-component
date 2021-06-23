import { useState, useEffect, useCallback } from 'react';

import './style.scss';

import { Actions } from './Actions';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

import { takeMonth } from '../../helpers/monthGenerator';

export const Calendar = () => {
  const [dateList, setDateList] = useState<Date[][]>([[new Date()]]);
  const [startDate, setStartDate] = useState('Data initial');
  const [endDate, setEndDate] = useState('Data final');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = useCallback(() => {
    setShowCalendar(true);
  }, []);

  const handleHiddenCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

 useEffect(() => {
    const data = takeMonth()();
    setDateList(data);
  }, []);

  return (
    <div>
      <Actions 
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        onClick={handleShowCalendar}
      />

      {showCalendar && <div className="calendar">
        <Header />
        <Body month={dateList} />
        <Footer onClick={handleHiddenCalendar} />
      </div>}
    </div>
  )
}