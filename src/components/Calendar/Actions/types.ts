export type ActionProps = {
  startDate: string;
  endDate: string;
  rightButtonFocus: boolean;
  leftButtonFocus: boolean;
  setStartDate: (e: any ) => void;
  setEndDate: (e: any) => void;
  onClick: () => void;
  handleFocus: (type: string) => void;
}