export type BodyProps = {
  months: Date[][];
  setSelectedDate: (day: Date) => void;
  handleMonthByDay: (month: Date) => string;
  searchMonthDays: (day: Date, month: Date[][]) => string;
  compareStartDate: (day: Date) => string;
  searchDaysBeforeToday: (day: Date) => string;
  compareEndDate: (day: Date) => string;
  handleImplicitSelectedDate: (day: Date) =>  string;
};
