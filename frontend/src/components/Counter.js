import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter({ type, label, icon }) {
  const [count, setCount] = useState(0);
  const [today] = useState(new Date().toISOString().split('T')[0]);

  const increment = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/increment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: today, type: type })
      });
      
      if (response.ok) {
        setCount(count + 1);
      }
    } catch (error) {
      console.error('计数失败:', error);
    }
  };

  useEffect(() => {
    // 获取今天的初始计数
    fetch(`http://localhost:5000/api/count/${today}/${type}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error('加载计数失败:', err));
  }, [today, type]);

  return (
    <div className="counter-card">
      <div className="counter-icon">{icon}</div>
      <h3>{label}</h3>
      <div className="count-display">{count}</div>
      <button onClick={increment} className="increment-btn">
        {label} +1
      </button>
    </div>
  );
}

export default Counter;