import '../../index.css'
interface CalendarIconProps {
    day: number,
    month: string,
}

const CalendarCustomIcon = (params: CalendarIconProps) => {
  return (
    <div className='calendar-icon'>
        <div className='calendar-month'>
            {params.month}
        </div>
        <p className='calendar-day'>{params.day}</p>
    </div>
  )
}

export default CalendarCustomIcon