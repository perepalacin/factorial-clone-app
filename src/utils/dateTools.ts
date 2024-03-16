export function getDaysOfMonth(yearNum: number, monthNum: number) {
    const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
    const daysArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(yearNum, monthNum-1, day);
      const dayNumber = date.getDate();
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  
      daysArray.push({ dayNumber, dayName });
    }
  
    return daysArray;
  }
