import React from 'react';
import ReactDOM from 'react-dom/client';




import "./Calendar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App kalendar">
    <div className='app text-dark'>
      <h1 className='text-center'>React Kalendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Izabrani datum :</span>{' '}
        {date.toDateString()}
      </p>
    </div>
    </div>
  );
}

export default App;