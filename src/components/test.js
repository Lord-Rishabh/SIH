import React from 'react'

const test = () => {
  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Result</p>
        <p className="time">September, 15</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">5</span>
            <span className="status-type">Test Completed</span>
          </div>
          <div className="item-status">
            <span className="status-number">1</span>
            <span className="status-type">Test Pending</span>
          </div>
          <div className="item-status">
            <span className="status-number">6</span>
            <span className="status-type">Total Tests</span>
          </div>
        </div>
        <div className="view-actions">
          
          <button className="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <div className="project-boxes jsGridView">
        <div className="project-box-wrapper">
          <div className="project-box" style={{ backgroundColor: "#fee4cb" }}>
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">OCEAN Test</p>
              <p className="box-content-subheader">Attempted</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "60%", backgroundColor: "#ff942e" }} ></span>
              </div>
              <p className="box-progress-percentage">60%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#ff942e" }}>
                Scored
              </div>
            </div>
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box" style={{ backgroundColor: "#e9e7fd" }}>
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Numerical Test</p>
              <p className="box-content-subheader">Attempted</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "50%", backgroundColor: "#4f3ff0" }}></span>
              </div>
              <p className="box-progress-percentage">50%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#4f3ff0" }}>
                Scored
              </div>
            </div>
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box">
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Spatial Test</p>
              <p className="box-content-subheader">Attemped</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "80%", backgroundColor: "#096c86" }}></span>
              </div>
              <p className="box-progress-percentage">80%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#096c86" }}>
                Scored
              </div>
            </div>
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box" style={{ backgroundColor: "#ffd3e2" }}>
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Abstract Test</p>
              <p className="box-content-subheader">Attempted</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "20%", backgroundColor: "#df3670" }}></span>
              </div>
              <p className="box-progress-percentage">20%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#df3670" }}>
                Scored
              </div>
            </div>
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box" style={{ backgroundColor: "#c8f7dc" }}>
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Logical Test</p>
              <p className="box-content-subheader">Atempted</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "60%", backgroundColor: "#34c471" }}></span>
              </div>
              <p className="box-progress-percentage">60%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#34c471" }}>
                Scored
              </div>
            </div>
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box" style={{ backgroundColor: "#d5deff" }}>
            <div className="project-box-header">
              <span>September 15, 2023</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Verbal Test</p>
              <p className="box-content-subheader">Not attempted</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Percent</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{ width: "0%", backgroundColor: "#4067f9" }}></span>
              </div>
              <p className="box-progress-percentage">0%</p>
            </div>
            <div className="project-box-footer">
              <div className="days-left" style={{ color: "#4067f9" }}>
                Not Scored
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default test