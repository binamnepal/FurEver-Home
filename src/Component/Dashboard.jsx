import React, { useState } from 'react';
import '../Css file/Dashboard.css';
import { Users, Heart, MapPin, DollarSign, TrendingUp, PawPrint, LogOut } from 'lucide-react';

const FurEverHomeDashboard = () => {
  const [dashboardData] = useState({
    stats: {
      totalAdoptions: 342,
      adoptionGrowth: 12.5,
      totalDonations: 485000, 
      donationGrowth: 8.3,
      activePets: 67,
      petsGrowth: -5.2,
      totalDonors: 1247,
      donorGrowth: 15.8
    },
    adoptionsByMonth: [
      { month: 'Shrawan', adoptions: 25, donations: 35000 },
      { month: 'Bhadra', adoptions: 32, donations: 42000 },
      { month: 'Ashwin', adoptions: 28, donations: 38000 },
      { month: 'Kartik', adoptions: 35, donations: 48000 },
      { month: 'Mangsir', adoptions: 42, donations: 55000 },
      { month: 'Poush', adoptions: 38, donations: 52000 }
    ],
    petCategories: [
      { name: 'Dogs', percentage: 45, count: 154 },
      { name: 'Cats', percentage: 35, count: 120 },
      { name: 'Rabbits', percentage: 12, count: 41 },
      { name: 'Birds', percentage: 5, count: 17 },
      { name: 'Others', percentage: 3, count: 10 }
    ],
    adoptionByProvince: [
      { province: 'Bagmati', percentage: 35, count: 120 },
      { province: 'Gandaki', percentage: 18, count: 62 },
      { province: 'Province 1', percentage: 15, count: 51 },
      { province: 'Lumbini', percentage: 12, count: 41 },
      { province: 'Sudurpashchim', percentage: 8, count: 27 },
      { province: 'Karnali', percentage: 7, count: 24 },
      { province: 'Madhesh', percentage: 5, count: 17 }
    ],
    recentDonations: [
      { id: 1, donor: 'Ramesh Sharma', amount: 5000, date: '2026-01-02', purpose: 'Medical Fund' },
      { id: 2, donor: 'Sita Thapa', amount: 3000, date: '2026-01-01', purpose: 'Food Supply' },
      { id: 3, donor: 'Anonymous', amount: 10000, date: '2025-12-31', purpose: 'General' },
      { id: 4, donor: 'Bijay Gurung', amount: 2500, date: '2025-12-30', purpose: 'Shelter Maintenance' }
    ]
  });

  const handleLogout = async () => {
    console.log('Logout clicked');
    alert('Logout functionality - Connect to your backend');
  };

  const colors = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#6366F1'];

  return (  
    <div className="dashboard">
        <div className="sidebar">
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-icon">
                <PawPrint size={24} color="white" />
              </div>
              <div className="logo-text">
                <h1>FurEver Home</h1>
                <p>Nepal</p>
              </div>
            </div>
          </div>

          <nav className="nav">
            <p className="nav-label">MAIN MENU</p>
            <button className="nav-btn nav-btn-active">
              <Users size={20} />
              <span>Dashboard</span>
            </button>
            <button className="nav-btn nav-btn-inactive">
              <PawPrint size={20} />
              <span>Pets</span>
            </button>
            <button className="nav-btn nav-btn-inactive">
              <Heart size={20} />
              <span>Adoptions</span>
            </button>
            <button className="nav-btn nav-btn-inactive">
              <DollarSign size={20} />
              <span>Donations</span>
            </button>
          </nav>

          <div className="logout-section">
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
        <div className="main-content">
          <div className="header">
            <h2>Dashboard</h2>
            <p>Welcome back to FurEver Home</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon stat-icon-purple">
                  <Heart size={24} />
                </div>
                <span className={dashboardData.stats.adoptionGrowth >= 0 ? 'stat-growth stat-growth-positive' : 'stat-growth stat-growth-negative'}>
                  {dashboardData.stats.adoptionGrowth >= 0 ? '↑' : '↓'} {Math.abs(dashboardData.stats.adoptionGrowth)}%
                </span>
              </div>
              <h3 className="stat-label">Total Adoptions</h3>
              <p className="stat-value">{dashboardData.stats.totalAdoptions}</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon stat-icon-green">
                  <DollarSign size={24} />
                </div>
                <span className={dashboardData.stats.donationGrowth >= 0 ? 'stat-growth stat-growth-positive' : 'stat-growth stat-growth-negative'}>
                  {dashboardData.stats.donationGrowth >= 0 ? '↑' : '↓'} {Math.abs(dashboardData.stats.donationGrowth)}%
                </span>
              </div>
              <h3 className="stat-label">Total Donations</h3>
              <p className="stat-value">NPR {(dashboardData.stats.totalDonations / 1000).toFixed(0)}K</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon stat-icon-orange">
                  <PawPrint size={24} />
                </div>
                <span className={dashboardData.stats.petsGrowth >= 0 ? 'stat-growth stat-growth-positive' : 'stat-growth stat-growth-negative'}>
                  {dashboardData.stats.petsGrowth >= 0 ? '↑' : '↓'} {Math.abs(dashboardData.stats.petsGrowth)}%
                </span>
              </div>
              <h3 className="stat-label">Available Pets</h3>
              <p className="stat-value">{dashboardData.stats.activePets}</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon stat-icon-blue">
                  <Users size={24} />
                </div>
                <span className={dashboardData.stats.donorGrowth >= 0 ? 'stat-growth stat-growth-positive' : 'stat-growth stat-growth-negative'}>
                  {dashboardData.stats.donorGrowth >= 0 ? '↑' : '↓'} {Math.abs(dashboardData.stats.donorGrowth)}%
                </span>
              </div>
              <h3 className="stat-label">Total Donors</h3>
              <p className="stat-value">{dashboardData.stats.totalDonors}</p>
            </div>
          </div>

 
          <div className="chart-grid">
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Adoptions & Donations Trend</h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-dot legend-dot-purple"></div>
                    <span className="legend-label">Adoptions</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot legend-dot-orange"></div>
                    <span className="legend-label">Donations (K)</span>
                  </div>
                </div>
              </div>
              <div className="bar-chart">
                {dashboardData.adoptionsByMonth.map((item, idx) => {
                  const maxAdoption = Math.max(...dashboardData.adoptionsByMonth.map(d => d.adoptions));
                  const maxDonation = Math.max(...dashboardData.adoptionsByMonth.map(d => d.donations));
                  const adoptionHeight = (item.adoptions / maxAdoption) * 100;
                  const donationHeight = (item.donations / maxDonation) * 100;
                  
                  return (
                    <div key={idx} className="bar-group">
                      <div className="bars">
                        <div className="bar bar-purple" style={{ height: `${adoptionHeight}%` }}>
                          <div className="bar-tooltip">{item.adoptions} adoptions</div>
                        </div>
                        <div className="bar bar-orange" style={{ height: `${donationHeight}%` }}>
                          <div className="bar-tooltip">NPR {(item.donations / 1000).toFixed(0)}K</div>
                        </div>
                      </div>
                      <span className="bar-label">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>


            <div className="chart-card">
              <h3 className="chart-title">Adopted Pet Types</h3>
              <div className="donut-container">
                <svg className="donut-svg">
                  {dashboardData.petCategories.reduce((acc, item, idx) => {
                    const prevPercentage = acc.total;
                    const percentage = item.percentage;
                    const startAngle = (prevPercentage / 100) * 360;
                    const endAngle = ((prevPercentage + percentage) / 100) * 360;
                    const largeArc = percentage > 50 ? 1 : 0;
                    
                    const startX = 96 + 80 * Math.cos((Math.PI * startAngle) / 180);
                    const startY = 96 + 80 * Math.sin((Math.PI * startAngle) / 180);
                    const endX = 96 + 80 * Math.cos((Math.PI * endAngle) / 180);
                    const endY = 96 + 80 * Math.sin((Math.PI * endAngle) / 180);
                    
                    acc.elements.push(
                      <path
                        key={idx}
                        d={`M 96 96 L ${startX} ${startY} A 80 80 0 ${largeArc} 1 ${endX} ${endY} Z`}
                        fill={colors[idx % colors.length]}
                        className="donut-path"
                      />
                    );
                    
                    acc.total += percentage;
                    return acc;
                  }, { elements: [], total: 0 }).elements}
                  <circle cx="96" cy="96" r="50" fill="white" />
                </svg>
              </div>
              <div className="category-list">
                {dashboardData.petCategories.map((item, idx) => (
                  <div key={idx} className="category-item">
                    <div className="category-name">
                      <div className="category-dot" style={{ backgroundColor: colors[idx % colors.length] }}></div>
                      <span className="category-label">{item.name}</span>
                    </div>
                    <span className="category-percent">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="bottom-grid">
       
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Adoptions by Province</h3>
                <MapPin size={20} color="#9ca3af" />
              </div>
              <div className="province-list">
                {dashboardData.adoptionByProvince.map((item, idx) => (
                  <div key={idx}>
                    <div className="province-item-header">
                      <span className="province-name">{item.province}</span>
                      <div className="province-stats">
                        <span className="province-count">{item.count} adoptions</span>
                        <span className="province-percent">{item.percentage}%</span>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: colors[idx % colors.length]
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-card">
              <h3 className="chart-title">Recent Donations</h3>
              <div className="donation-list">
                {dashboardData.recentDonations.map((donation) => (
                  <div key={donation.id} className="donation-item">
                    <div className="donation-header">
                      <span className="donor-name">{donation.donor}</span>
                      <span className="donation-amount">NPR {donation.amount}</span>
                    </div>
                    <p className="donation-purpose">{donation.purpose}</p>
                    <span className="donation-date">{donation.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FurEverHomeDashboard;