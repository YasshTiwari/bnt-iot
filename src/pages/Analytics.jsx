import React from 'react'
import './Analytics.css'

import {
    FaMicrochip,
    FaDatabase,
    FaChartLine
} from 'react-icons/fa'

function Analytics() {

    return (

        <div className='analytics-page'>

            <div className='analytics-overlay'></div>

            <div className='analytics-container'>

                <h1 className='title'>
                    Analytics Dashboard
                </h1>

                <p className='analytics-subtitle'>
                    Real-time Industrial IoT analytics and monitoring system
                    powered by AI and cloud infrastructure.
                </p>

                <div className='dashboard-grid'>

                    {/* CARD 1 */}

                    <div className='dashboard-card'>

                        <div className='icon-box'>
                            <FaMicrochip />
                        </div>

                        <h2>Active Devices</h2>

                        <h3>3 Lakh+</h3>

                        <p>
                            Connected IoT devices actively monitored
                            across industrial environments.
                        </p>

                    </div>

                    {/* CARD 2 */}

                    <div className='dashboard-card'>

                        <div className='icon-box'>
                            <FaDatabase />
                        </div>

                        <h2>Data Usage</h2>

                        <h3>450GB</h3>

                        <p>
                            Secure cloud data processed daily
                            through advanced monitoring systems.
                        </p>

                    </div>

                    {/* CARD 3 */}

                    <div className='dashboard-card'>

                        <div className='icon-box'>
                            <FaChartLine />
                        </div>

                        <h2>Reports Generated</h2>

                        <h3>850+</h3>

                        <p>
                            AI generated reports and analytics
                            insights for smart decision making.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Analytics