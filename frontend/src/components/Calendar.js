import React, { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [month] = useState(new Date().getMonth());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    fetch(`http://localhost:5000/api/calendar/${year}/${month}`)
      .then(res => res.json())
      .then(data => setCalendarData(data))
      .catch(err => console.error('加载日历数据失败:', err));
  }, [month, year]);

  const renderCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${month + 1}-${day}`;
      const dayData = calendarData.find(d => d.date === date);
      const total = dayData ? dayData.total : 0;
      
      calendar.push(
        <div className="calendar-day" key={day}>
          <div className="day-number">{day}</div>
          <div className="day-count">{total}</div>
        </div>
      );
    }
    
    return calendar;
  };

  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  return (
    <div className="calendar-container">
      <h2>想念日历 - {year}年 {monthNames[month]}</h2>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
      <div className="calendar-summary">
        <h3>本月统计</h3>
        <div className="summary-item">
          <span>总想念次数:</span>
          <span>{calendarData.reduce((sum, day) => sum + day.total, 0)}</span>
        </div>
      </div>
    </div>
  );
}

export default Calendar;