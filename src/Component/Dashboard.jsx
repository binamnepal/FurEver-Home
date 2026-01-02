import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import '../Css file/Dashboard.css';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  const statsCards = [
    { title: 'Total Donations', value: 'NPR 2,847,500', change: '+18%', icon: '💰', color: 'orange' },
    { title: 'Active Donors', value: '1,234', change: '+12%', icon: '👥', color: 'blue' },
    { title: 'Pets Supported', value: '892', change: '+15%', icon: '❤️', color: 'pink' },
    { title: 'Avg Donation', value: 'NPR 2,310', change: '+5%', icon: '📈', color: 'green' }
  ];

  const donationTrend = [
    { month: 'Shrawan', donations: 185000, donors: 145 },
    { month: 'Bhadra', donations: 210000, donors: 168 },
    { month: 'Asoj', donations: 245000, donors: 192 },
    { month: 'Kartik', donations: 228000, donors: 178 },
    { month: 'Mangsir', donations: 267000, donors: 215 },
    { month: 'Poush', donations: 298000, donors: 234 }
  ];

  const donationPurposes = [
    { name: 'Medical', value: 35, color: '#f97316' },
    { name: 'Food', value: 27, color: '#3b82f6' },
    { name: 'Shelter', value: 20, color: '#8b5cf6' },
    { name: 'Rescue', value: 14, color: '#10b981' },
    { name: 'Training', value: 4, color: '#ec4899' }
  ];

  const nepalCities = [
    { city: 'KTM', donations: 985000 },
    { city: 'PKR', donations: 645000 },
    { city: 'LTP', donations: 545000 },
    { city: 'BHP', donations: 365000 },
    { city: 'BRT', donations: 307500 }
  ];

  return (
    <div className="db-container">
      <div className="db-max-width">
        {/* Header Section */}
        <header className="db-header">
          <div className="db-brand">
            <div className="db-logo-box">🐾</div>
            <div>
              <h1>Furever Home</h1>
              <p>Donation Tracker • Nepal</p>
            </div>
          </div>
          <div className="db-header-actions">
            <button className="btn-secondary">📅 Poush, 2081</button>
            <button className="btn-primary">+ Add Donation</button>
          </div>
        </header>

        {/* Top Statistics Cards */}
        <section className="db-stats-grid">
          {statsCards.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-card-top">
                <div className={`stat-icon-wrapper ${stat.color}`}>{stat.icon}</div>
                <span className="stat-badge">{stat.change}</span>
              </div>
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Main Charts Area */}
        <div className="db-charts-main">
          <div className="chart-box large">
            <div className="chart-header">
              <h2>Donation Trends</h2>
              <select onChange={(e) => setTimeRange(e.target.value)}>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={donationTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="donations" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="donors" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="goal-card">
            <h2>Annual Goal 2081</h2>
            <div className="circular-progress">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="bg" />
                <circle cx="50" cy="50" r="45" className="fg" style={{ strokeDashoffset: '140' }} />
              </svg>
              <div className="progress-text">
                <span className="percent">57%</span>
                <span className="label">Achieved</span>
              </div>
            </div>
            <div className="goal-details">
              <div className="goal-row"><span>Target</span> <strong>5.0M</strong></div>
              <div className="goal-row"><span>Current</span> <strong>2.8M</strong></div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="db-charts-sub">
          <div className="chart-box">
            <h2>Donation Distribution</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={donationPurposes} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {donationPurposes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h2>Top Donation Cities</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={nepalCities}>
                <XAxis dataKey="city" />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="donations" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;