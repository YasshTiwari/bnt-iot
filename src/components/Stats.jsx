import React from 'react'
import CountUp from 'react-countup'
import './Stats.css'

function Stats() {
    return (
        <section className='stats'>

            <div className='stat-card'>
                <h1><CountUp end={1500} duration={4} />+</h1>
                <p>Connected Devices</p>
            </div>

            <div className='stat-card'>
                <h1><CountUp end={98} duration={4} />%</h1>
                <p>System Accuracy</p>
            </div>

            <div className='stat-card'>
                <h1><CountUp end={500} duration={4} />+</h1>
                <p>Industrial Clients</p>
            </div>

            <div className='stat-card'>
                <h1><CountUp end={24} duration={4} />/7</h1>
                <p>Monitoring Support</p>
            </div>

        </section>
    )
}

export default Stats