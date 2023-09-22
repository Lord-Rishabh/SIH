import React from 'react'

const resource = () => {
    return (
        <div className="projects-section">
            <div className="projects-section-header">
                <p>Resources</p>
                <p className="time">December, 12</p>
            </div>
            <div className="projects-section-line">
                <div className="projects-status">
                    <div className="item-status">
                        <span className="status-number">2</span>
                        <span className="status-type">Courses Completed</span>
                    </div>
                    <div className="item-status">
                        <span className="status-number">4</span>
                        <span className="status-type">Courses in Progress</span>
                    </div>
                    <div className="item-status">
                        <span className="status-number">6</span>
                        <span className="status-type">Total Courses</span>
                    </div>
                </div>
                <div className="view-actions">
                    
                    <button className="view-btn grid-view active" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="project-boxes jsGridView">
                <div className="project-box-wrapper">
                    <div className="project-box" style={{ backgroundColor: "#fee4cb" }}>
                        <div className="project-box-header">
                            <span>Introduction to DSA</span>
                            <div className="more-wrapper">
                            </div>
                        </div>
                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-header" src="data:image/jpeg;base64,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"
                                height="115px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "100%", backgroundColor: "#ff942e" }}></span>
                            </div>
                            <p className="box-progress-percentage">100%</p><br />
                        </div>
                        <div className="project-box-footer">


                        </div>
                    </div>
                </div>
                <div className="project-box-wrapper">
                    <div className="project-box" style={{ backgroundColor: "#e9e7fd" }}>
                        <div className="project-box-header">
                            <span>Time Complexity of an Algorithm</span>
                            <div className="more-wrapper">

                            </div>
                        </div>
                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-subheader" src="https://i.ytimg.com/vi/6CWVNRAIAEY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_ih8msZgk0Cg8DEEtmoVjzgBdJg"
                                heigth="100px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "100%", backgroundColor: "#4f3ff0" }}></span>
                            </div>
                            <p className="box-progress-percentage">100%</p>
                        </div>
                        <br />
                        <div className="project-box-footer">


                        </div>
                    </div>
                </div>
                <div className="project-box-wrapper">
                    <div className="project-box">
                        <div className="project-box-header">
                            <span>Introduction to Arrays</span>
                            <div className="more-wrapper">
                            </div>
                        </div>

                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-subheader" src="https://i.ytimg.com/vi/CysMrYVgyGU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDS0LWQj0URI2p6wVphjPRRYElxoA"
                                heigth="100px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "80%", backgroundColor: "#096c86" }}></span>
                            </div>
                            <p className="box-progress-percentage">80%</p>
                        </div>
                        <br />
                        <div className="project-box-footer">


                        </div>
                    </div>
                </div>
                <div className="project-box-wrapper">
                    <div className="project-box" style={{ backgroundColor: "#ffd3e2" }}>
                        <div className="project-box-header">
                            <span>Representation of Queue</span>
                            <div className="more-wrapper">
                                <button className="project-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-subheader" src="https://i.ytimg.com/vi/enADmGHZuiY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBaYfEV1RHg_7tMyOcl3L1QM4u5iw"
                                heigth="100px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "45%", backgroundColor: "#df3670" }}></span>
                            </div>
                            <p className="box-progress-percentage">45%</p>
                        </div>
                        <div className="project-box-footer">


                        </div>
                    </div>
                </div>
                <div className="project-box-wrapper">
                    <div className="project-box" style={{ backgroundColor: "#c8f7dc" }}>
                        <div className="project-box-header">
                            <span>Representation Binary Tree</span>
                            <div className="more-wrapper">
                                <button className="project-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-subheader" src="https://i.ytimg.com/vi/mQk6Y5B_0Mk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDkFgm7W_RCH7e0TQTItAmdXoS3HA"
                                heigth="150px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "50%", backgroundColor: "#34c471" }}></span>
                            </div>
                            <p className="box-progress-percentage">50%</p>
                        </div>
                        <div className="project-box-footer">


                        </div>
                    </div>
                </div>
                <div className="project-box-wrapper">
                    <div className="project-box" style={{ backgroundColor: "#d5deff" }}>
                        <div className="project-box-header">
                            <span>Introduction to Dynamic Programming</span>
                            <div className="more-wrapper">
                                <button className="project-btn-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-more-vertical">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="12" cy="5" r="1" />
                                        <circle cx="12" cy="19" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="project-box-content-header">
                            <img alt="imagez" className="box-content-subheader" src="https://i.ytimg.com/vi/qWFKDj41eVw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC2JTgDjxDwvNiUelNuCiD-QDnoqA"
                                heigth="150px" width="200px" />
                        </div>
                        <div className="box-progress-wrapper">
                            <p className="box-progress-header">Progress</p>
                            <div className="box-progress-bar">
                                <span className="box-progress" style={{ width: "40%", backgroundColor: "#4067f9" }}></span>
                            </div>
                            <p className="box-progress-percentage">40%</p>
                        </div>
                        <div className="project-box-footer">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resource