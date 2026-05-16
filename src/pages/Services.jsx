import React from 'react'
import ServiceCard from '../components/ServiceCard'

function Services() {

    const data = [

        {
            title: 'Asset Monitoring',
            text: 'Real-time monitoring and tracking of industrial assets.'
        },

        {
            title: 'Warehouse Automation',
            text: 'Smart warehouse management with automated operations.'
        },

        {
            title: 'Smart Sensors',
            text: 'Advanced sensor integration for live environmental monitoring.'
        },

        {
            title: 'Cloud Analytics',
            text: 'Cloud-based analytics dashboard with AI-powered insights.'
        },

        {
            title: 'Predictive Maintenance',
            text: 'AI-driven maintenance alerts to prevent machine failure.'
        },

        {
            title: 'Energy Management',
            text: 'Monitor and optimize industrial energy consumption.'
        },

        {
            title: 'Remote Device Control',
            text: 'Control IoT devices remotely from a centralized dashboard.'
        },

        {
            title: 'GPS & Vehicle Tracking',
            text: 'Live vehicle tracking and fleet management solutions.'
        },

        {
            title: 'Smart Lighting Systems',
            text: 'Automated smart lighting solutions for industries and offices.'
        },

        {
            title: 'Security & Surveillance',
            text: 'IoT-based CCTV monitoring and smart security systems.'
        },

        {
            title: 'Industrial Automation',
            text: 'Automated industrial processes for higher efficiency.'
        },

        {
            title: 'Environmental Monitoring',
            text: 'Monitor temperature, humidity, air quality, and pollution levels.'
        },

        {
            title: 'Smart Agriculture',
            text: 'IoT solutions for irrigation, soil monitoring, and crop analysis.'
        },

        {
            title: 'RFID Tracking',
            text: 'RFID-enabled inventory and asset tracking systems.'
        },

        {
            title: 'Smart Metering',
            text: 'Digital smart meters for electricity and water monitoring.'
        },

        {
            title: 'Data Visualization',
            text: 'Interactive dashboards and graphical industrial reports.'
        }

    ]

    return (

        <div className='services-page'>

            <div className='services-overlay'></div>

            <div className='services-container'>

                <h1 className='title'>
                    Services
                </h1>

                <p className='services-subtitle'>
                    Smart Industrial IoT solutions powered by
                    Artificial Intelligence, automation and
                    cloud-based monitoring systems.
                </p>

                <div className='services-grid'>

                    {
                        data.map((item, index) => (

                            <ServiceCard
                                key={index}
                                title={item.title}
                                text={item.text}
                            />

                        ))
                    }

                </div>

            </div>

        </div>

    )
}

export default Services