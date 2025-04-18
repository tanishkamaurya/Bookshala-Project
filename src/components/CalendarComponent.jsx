import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import './CalendarComponent.css'; // Ensure you have this CSS file for custom styles

const CalendarComponent = () => {
  const [visitDates, setVisitDates] = useState([]);

  useEffect(() => {
    const fetchVisitHistory = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store token in localStorage
        const response = await axios.get('http://localhost:4001/visit/visit-history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetchedDates = response.data.visitDates.map(date => new Date(date));
        console.log('Fetched and converted visit dates:', fetchedDates);
        setVisitDates(fetchedDates);
      } catch (error) {
        console.log('Error fetching visit history:', error);
      }
    };

    fetchVisitHistory();
  }, []);

  return (
    <Calendar
      tileClassName={({ date, view }) => {
        if (view === 'month') {
          const isVisited = visitDates.some(d => d.toDateString() === date.toDateString());
          if (isVisited) {
            console.log('Marking date as visited:', date);
            return 'visited-date';
          }
        }
        return null;
      }}
    />
  );
};

export default CalendarComponent;
