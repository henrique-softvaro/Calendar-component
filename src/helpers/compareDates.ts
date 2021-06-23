import { isSameMonth } from 'date-fns';

export function CompareDates(day: Date) {
  if(!isSameMonth(day, new Date())) {
    return 'disabled-date';
  }

  return '';
} 