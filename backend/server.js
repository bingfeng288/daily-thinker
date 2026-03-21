const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// 初始化数据库
const db = new sqlite3.Database('./database/daily-thinker.db');

// 创建表
db.run(`CREATE TABLE IF NOT EXISTS counts (
  date TEXT,
  kiss INTEGER DEFAULT 0,
  hug INTEGER DEFAULT 0,
  sleep INTEGER DEFAULT 0,
  PRIMARY KEY (date)
)`);

// API: 增加计数
app.post('/api/increment', (req, res) => {
  const { date, type } = req.body;
  
  db.run(`UPDATE counts SET ${type} = ${type} + 1 WHERE date = ?`, [date], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: '更新失败' });
    }
    
    // 如果没有该日期的记录，创建新记录
    db.get(`SELECT * FROM counts WHERE date = ?`, [date], (err, row) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: '查询失败' });
      }
      
      if (!row) {
        db.run(`INSERT INTO counts (date, ${type}) VALUES (?, 1)`, [date], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: '创建记录失败' });
          }
          res.json({ success: true });
        });
      } else {
        res.json({ success: true });
      }
    });
  });
});

// API: 获取指定日期的计数
app.get('/api/count/:date/:type', (req, res) => {
  const { date, type } = req.params;
  
  db.get(`SELECT ${type} FROM counts WHERE date = ?`, [date], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: '查询失败' });
    }
    
    const count = row ? row[type] : 0;
    res.json({ count });
  });
});

// API: 获取月度日历数据
app.get('/api/calendar/:year/:month', (req, res) => {
  const { year, month } = req.params;
  
  db.all(`SELECT date, kiss, hug, sleep, (kiss + hug + sleep) as total FROM counts WHERE date LIKE ?`, 
         [`${year}-${month}-%`], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: '查询失败' });
    }
    
    res.json(rows);
  });
});

// API: 获取今日总数
app.get('/api/today-total', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  
  db.get(`SELECT kiss, hug, sleep FROM counts WHERE date = ?`, [today], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: '查询失败' });
    }
    
    const kiss = row ? row.kiss : 0;
    const hug = row ? row.hug : 0;
    const sleep = row ? row.sleep : 0;
    
    res.json({ kiss, hug, sleep });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`后端服务启动在 http://localhost:${PORT}`);
});