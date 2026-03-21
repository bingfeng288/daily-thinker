import React from 'react';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>💕 每日想你 💕</h1>
        <p className="description">记录每一天想念的次数，让爱可视化</p>
      </header>

      <main className="App-main">
        <div className="counters-container">
          <Counter 
            type="kiss" 
            label="想和你亲亲" 
            icon="💋"
            className="kiss-card"
          />
          <Counter 
            type="hug" 
            label="想和你抱抱" 
            icon="🤗"
            className="hug-card"
          />
          <Counter 
            type="sleep" 
            label="想和你睡觉" 
            icon="💤"
            className="sleep-card"
          />
        </div>

        <div className="total-container">
          <h2>今日想念总数</h2>
          <div className="today-summary">
            <div className="summary-item">
              <span>💋 亲亲:</span>
              <span>0</span>
            </div>
            <div className="summary-item">
              <span>🤗 抱抱:</span>
              <span>0</span>
            </div>
            <div className="summary-item">
              <span>💤 睡觉:</span>
              <span>0</span>
            </div>
            <div className="summary-item total">
              <span>总计:</span>
              <span>0</span>
            </div>
          </div>
        </div>

        <Calendar />
      </main>
    </div>
  );
}

export default App;