export function convertDateFormat(inputDate: string): string {
  const parts: number[] = inputDate.split('-').map((part) => parseInt(part, 10));
  const year: number = parts[0];
  const month: number = parts[1] - 1;
  const day: number = parts[2];

  const dateObject: Date = new Date(year, month, day);

  const dayOfMonth: number = dateObject.getDate();
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName: string = monthNames[dateObject.getMonth()];
  const yearValue: number = dateObject.getFullYear();

  const formattedDate: string = `${dayOfMonth} ${monthName} ${yearValue}`;

  return formattedDate;
}
