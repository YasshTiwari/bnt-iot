import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SpiderEffect from '../components/SpiderEffect'

function Hero() {

    const navigate = useNavigate()

    return (

        <section
            className='hero'
            style={{
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            {/* SPIDER EFFECT */}
            <SpiderEffect />

            {/* DARK OVERLAY */}
            {/* DARK OVERLAY */}
            <div
                className='overlay'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.65)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            ></div>

            {/* HERO CONTENT */}
            <motion.div
                className='hero-content'
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    position: 'relative',
                    zIndex: 2
                }}
            >

                <h1>
                    Smart Industrial <span>IoT Solutions</span>
                </h1>

                <p>
                    AI powered monitoring, GPS tracking, RFID systems,
                    cloud analytics and automation for modern industries.
                </p>

                <div className='hero-btns'>

                    <button
                        onClick={() => navigate('/services')}
                    >
                        Explore Services
                    </button>

                    <button
                        className='secondary-btn'
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                    </button>

                </div>

            </motion.div>

        </section>
    )
}

export default Hero