import { useState, useEffect, useCallback } from 'react';
import { addMonths, format, isSameDay, isSameMonth, isBefore } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

import './style.scss';

import { Actions } from './Actions';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

import { takeSpecificMonths } from '../../helpers/monthGenerator';

export const Calendar = () => {
  const [startDate, setStartDate] = useState({
    value: 'Data initial',
    date: new Date(70, 1)
  });
  const [endDate, setEndDate] = useState({
    value: 'Data final',
    date: new Date(70, 1)
  });
  const [months, setMonths] = useState([[new Date()]]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [counter, setCounter] = useState(0);
  const [rightButtonFocus, setRightButtonFocus] = useState(false);
  const [leftButtonFocus, setLeftButtonFocus] = useState(false);

  const handleSelectedDate = (day: Date) => {
    const formattedInitialDate = format(day, 'iiiiii II', { locale: ptBR } );

    if(rightButtonFocus) {
      setStartDate({
        value: formattedInitialDate,
        date: day
      });
      setRightButtonFocus(false)
      setLeftButtonFocus(true);
      return;
    };

    if(leftButtonFocus) {
      setEndDate({
        value: formattedInitialDate,
        date: day
      });

      if(startDate.value === 'Data initial') {
        setRightButtonFocus(true);
        setLeftButtonFocus(false);
      }
    }
  }

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const handleHiddenCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const handleNextMonths = () => {
    setCounter(counter + 1);
  }

  const handlePrevMonths = () => {
    setCounter(counter - 1);
  }

  function handleMonthByDay(month: any): string {
    const titleMonth = format(month[1][5], 'MMMM', { locale: ptBR, });
    return `${titleMonth} ${format(month[1][5], 'YYY')}`;
  };

  function searchMonthDays(day: Date, month: Date[][]) {
    if(!isSameMonth(day, month[1][1])) {
      return 'remove-date';
    }
    return '';
  };

  function searchDaysBeforeToday(day: Date) {
    if(isBefore(day, new Date())) {
      return 'disabled-date';
    }
    return '';
  };

  function handleCompareStartDate(day: Date) {
    if(isSameDay(day, startDate.date)) {
      return 'selected-startDate';
    }
    return '';
  };

  function handleCompareEndDate(day: Date) {
    if(isSameDay(day, endDate.date)) {
      return 'selected-endDate';
    }
    return '';
  };

  function handleImplicitSelectedDate(day: Date) {
    if(startDate.value !== 'Data initial' && 
      endDate.value !== 'Data final' && 
      day < endDate.date) {
      return 'selected-implicitDate';
    }
    return '';
  };

  const handleFocus = (type: string) => {
    if(type === 'start') {
      setRightButtonFocus(true);
      setLeftButtonFocus(false);
      return;
    }

    if(type === 'end') {
      setRightButtonFocus(false);
      setLeftButtonFocus(true);
      return;
    }
  }

  useEffect(() => {
    if(counter === 0) {
      const specificMonths = takeSpecificMonths(new Date(), addMonths)();
      setMonths(specificMonths);
      return;
    }

    const specificMonths = takeSpecificMonths(addMonths(new Date(), counter) , addMonths)();
    setMonths(specificMonths);
  }, [counter]);

  return (
    <div>
      <Actions 
        startDate={startDate.value}
        endDate={endDate.value}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onClick={handleShowCalendar}
        handleFocus={handleFocus}
        rightButtonFocus={rightButtonFocus}
        leftButtonFocus={leftButtonFocus}
      />

      {showCalendar && <div className="calendar">
        <Header 
          handlePrevMonths={handlePrevMonths} 
          handleNextMonths={handleNextMonths} 
        />
        <Body
          months={months}
          setSelectedDate={handleSelectedDate}
          handleMonthByDay={handleMonthByDay}
          searchMonthDays={searchMonthDays}
          searchDaysBeforeToday={searchDaysBeforeToday}
          compareStartDate={handleCompareStartDate}
          compareEndDate={handleCompareEndDate}
          handleImplicitSelectedDate={handleImplicitSelectedDate}
        />
        <Footer onClick={handleHiddenCalendar} />
      </div>}
    </div>
  )
}