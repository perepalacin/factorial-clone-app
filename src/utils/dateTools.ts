export function getDaysOfMonth(yearNum: number, monthNum: number) {
  console.log(monthNum);
    const daysInMonth = new Date(yearNum, monthNum + 1, 0).getDate();
    console.log(daysInMonth);
    const daysArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(yearNum, monthNum, day);
      daysArray.push(date);
    }
  
    return daysArray;
  }

  export const shortFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
  export const longFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

