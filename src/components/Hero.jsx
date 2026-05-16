import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Hero() {

    const navigate = useNavigate()

    return (

        <section className='hero'>

            <div className='overlay'></div>

            <motion.div
                className='hero-content'
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <h1>
                    Smart Industrial IoT Solutions
                </h1>

                <p>
                    AI powered monitoring, GPS tracking, RFID systems,
                    cloud analytics and automation for modern industries.
                </p>

                <div className='hero-btns' >

                    <button onClick={() => navigate('/services')}>
                        Explore Services
                    </button>

                </div>

            </motion.div>

        </section>
    )
}

export default Hero