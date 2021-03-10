import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyApp() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
}
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
   
  );
}
export default MyApp;