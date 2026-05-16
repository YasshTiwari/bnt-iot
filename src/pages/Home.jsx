import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaMapMarkedAlt, FaChartLine, FaMicrochip, FaRobot, FaCloud, FaSeedling } from 'react-icons/fa'
import './Home.css'

function Home() {

    useEffect(() => {

        const handleScroll = () => {

            // DISABLE EFFECT ON DESKTOP
            if (window.innerWidth > 768) {

                const sections = document.querySelectorAll('.scroll-highlight')

                sections.forEach(section => {
                    section.style.transform = 'none'
                    section.style.boxShadow = 'none'
                })

                return
            }

            const sections = document.querySelectorAll('.scroll-highlight')

            let closestSection = null

            let minDistance = Infinity

            sections.forEach(section => {

                const rect = section.getBoundingClientRect()

                const sectionCenter = rect.top + rect.height / 2

                const screenCenter = window.innerHeight / 2

                const distance = Math.abs(screenCenter - sectionCenter)

                section.style.transform = 'translateY(0px) scale(1)'
                section.style.boxShadow = 'none'

                if (distance < minDistance) {
                    minDistance = distance
                    closestSection = section
                }

            })

            if (closestSection) {
                closestSection.style.transform = 'translateY(-10px) scale(1.02)'
                closestSection.style.boxShadow = '0 0 30px rgba(56,248,136,0.7)'
                closestSection.style.transition = '0.4s ease'
            }

        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const services = [

        {
            icon: <FaMapMarkedAlt />,
            title: 'GPS Tracking',
            text: 'Real time GPS monitoring system.'
        },

        {
            icon: <FaChartLine />,
            title: 'Smart Dashboard',
            text: 'Advanced analytics dashboard system.'
        },

        {
            icon: <FaMicrochip />,
            title: 'RFID Solutions',
            text: 'Industrial RFID management solutions.'
        },

        {
            icon: <FaRobot />,
            title: 'AI Analytics',
            text: 'AI powered industrial monitoring solutions.'
        },

        {
            icon: <FaCloud />,
            title: 'Cloud Monitoring',
            text: 'Secure cloud based IoT monitoring platform.'
        },

        {
            icon: <FaSeedling />,
            title: 'Smart Agriculture',
            text: 'Modern smart farming and sensor automation.'
        }

    ]

    const galleryImages = [
        {
            image:
                'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
            title: 'AI Monitoring',
            desc: 'Advanced AI based monitoring systems'
        },

        {
            image:
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
            title: 'Cloud Dashboard',
            desc: 'Real time cloud analytics dashboard'
        },

        {
            image:
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
            title: 'Industrial IoT',
            desc: 'Industrial automation solutions'
        },

        {
            image:
                'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop',
            title: 'RFID Tracking',
            desc: 'Smart RFID tracking technology'
        },

        {
            image:
                'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
            title: 'GPS Tracking',
            desc: 'Live GPS fleet management'
        },

        {
            image:
                'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
            title: 'Smart Agriculture',
            desc: 'IoT smart farming systems'
        }
    ]

    const form = useRef()

    const [popup, setPopup] = useState(false)

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm(
            'service_hbiiwuu',
            'template_60tuy9a',
            form.current,
            'YDYVto5nx2wtLBsMl'
        )
            .then(
                () => {

                    setPopup(true)

                    setTimeout(() => {
                        setPopup(false)
                    }, 3000)

                    e.target.reset()
                },

                (error) => {

                    console.log(error)

                }
            )
    }


    return (

        <div
            style={{
                backgroundImage:
                    'linear-gradient(rgba(2,6,23,0.85), rgba(15,23,42,0.92)), url("https://images.unsplash.com/photo-1723187137784-45f81b7253c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0dXJlJTIwZmllbGR8ZW58MHx8MHx8fDA%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white'
            }}
        >

            <Hero />

            {/* SERVICES SECTION */}
            <div>
                <h1 className='title'>
                    Our Services
                </h1>
            </div>

            <div className='services-grid'>

                {
                    services.map((item, index) => (

                        <div className='service-card scroll-highlight' key={index}>

                            <div className='service-icon'>
                                {item.icon}
                            </div>

                            <h2>
                                {item.title}
                            </h2>

                            <p>
                                {item.text}
                            </p>

                        </div>

                    ))
                }

            </div>

            {/* ABOUT SECTION */}

            <section
                style={{
                    padding: '100px 8%',
                }}
            >

                <h1
                    style={{
                        fontSize: '48px',
                        color: '#38f888',
                        marginBottom: '30px'
                    }}
                >
                    About BNT-IOT
                </h1>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
                        gap: '25px',
                        marginTop: '40px'
                    }}
                >

                    <div className='scroll-highlight'
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            padding: '25px',
                            borderRadius: '18px',
                            textAlign: 'center',
                            transition: '0.4s',
                            cursor: 'pointer'
                        }}

                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(56,189,248,0.6)'
                            e.currentTarget.style.background = 'rgba(56,189,248,0.12)'
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                        }}
                    >
                        <h2 style={{ color: '#38bdf8', marginBottom: '10px' }}>
                            3Lakh+
                        </h2>

                        <p>Connected Devices</p>
                    </div>

                    <div className='scroll-highlight'
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            padding: '25px',
                            borderRadius: '18px',
                            textAlign: 'center',
                            transition: '0.4s',
                            cursor: 'pointer'
                        }}


                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(56,189,248,0.6)'
                            e.currentTarget.style.background = 'rgba(56,189,248,0.12)'
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                        }}
                    >
                        <h2 style={{ color: '#38bdf8', marginBottom: '10px' }}>
                            500+
                        </h2>

                        <p>Industrial Clients</p>
                    </div>

                    <div className='scroll-highlight'
                        style={{
                            background: 'rgba(157, 222, 241, 0.06)',
                            padding: '25px',
                            borderRadius: '18px',
                            textAlign: 'center',
                            transition: '0.4s',
                            cursor: 'pointer'
                        }}


                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(56,189,248,0.6)'
                            e.currentTarget.style.background = 'rgba(56,189,248,0.12)'
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.background = 'rgba(157, 222, 241, 0.06)'
                        }}
                    >
                        <h2 style={{ color: '#38bdf8', marginBottom: '10px' }}>
                            24/7
                        </h2>

                        <p>Live Monitoring</p>
                    </div>
                </div>

                <p
                    style={{
                        fontSize: '20px',
                        lineHeight: '2',
                        color: '#e2e8f0',
                        marginBottom: '25px',
                        textAlign: 'justify',
                        borderLeft: '4px solid #38bdf8',
                        paddingLeft: '20px',
                        marginTop: '40px'
                    }}
                >
                    BNT-IOT delivers advanced Industrial IoT solutions for
                    smart industries, agriculture monitoring, GPS tracking,
                    AI analytics, cloud monitoring and automation systems.
                    Our innovative technologies help industries improve
                    productivity, efficiency and real-time decision making.
                </p>

            </section>


            {/* VISION MISSION SECTION */}

            <section className='vision-section'>

                <div className='vision-container'>

                    <div className='vision-box'>

                        <h1>Vision</h1>

                        <p>
                            Our vision is to amaze people through innovative
                            technology that revolutionizes their daily lives.
                        </p>

                    </div>

                    <div className='vision-box'>

                        <h1>Mission</h1>

                        <p>
                            By enabling efficiency through creating resource
                            conscious, inter-connected, configurable smart
                            systems for governments, organizations and individuals.
                        </p>

                    </div>

                    <div className='core-values'>

                        <h1>Core Values</h1>

                        <div className='values-grid'>

                            <div className='value-card scroll-highlight'>

                                <h2>Pursuit of Excellence</h2>

                                <p>
                                    We never stop doing whatever it takes to
                                    improve and move outside our comfort zones.
                                </p>

                            </div>

                            <div className='value-card scroll-highlight'>

                                <h2>Commitment</h2>

                                <p>
                                    We do what we say and we say what we mean.
                                </p>

                            </div>

                            <div className='value-card scroll-highlight'>

                                <h2>Kindness</h2>

                                <p>
                                    We care about what others feel and achieve
                                    as much as we care about ourselves.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* GALLERY SECTION */}

            <section className='gallery-section'>

                <div className='gallery-top'>

                    <h1 className='title'>Our Gallery</h1>

                </div>

                <div className='gallery-grid scroll-highlight'>

                    {
                        galleryImages.map((item, index) => (

                            <div className='gallery-card scroll-highlight' key={index}>

                                <img
                                    src={item.image}
                                    alt='gallery'
                                />

                                <div className='gallery-overlay scroll-highlight'>

                                    <h2>{item.title}</h2>

                                    <p>{item.desc}</p>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </section>

            {/* CONTACT SECTION */}

            <section
                style={{
                    padding: '100px 8%'
                }}
            >

                <h1
                    style={{
                        fontSize: '48px',
                        color: '#38f888',
                        marginBottom: '40px'
                    }}
                >
                    Contact Us
                </h1>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
                        gap: '40px'
                    }}
                >

                    {/* CONTACT FORM */}


                    <form
                        ref={form}
                        onSubmit={sendEmail}

                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            padding: '40px',
                            borderRadius: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            backdropFilter: 'blur(10px)'
                        }}
                    >

                        <input
                            type='text'
                            name='user_name'
                            placeholder='Enter Name'
                            required
                            style={inputStyle}
                        />

                        <input
                            type='email'
                            name='user_email'
                            placeholder='Enter Email'
                            required
                            style={inputStyle}
                        />

                        <textarea
                            rows='6'
                            name='message'
                            placeholder='Enter Message'
                            required
                            style={inputStyle}
                        ></textarea>

                        <button
                            style={{
                                padding: '15px',
                                background: '#38bdf8',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                transition: '0.4s'
                            }}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 0 20px #38bdf8'
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0px)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            Send Message
                        </button>

                    </form>


                    {
                        popup && (

                            <div
                                style={{
                                    position: 'fixed',
                                    top: '30px',
                                    right: '30px',
                                    background: '#38f888',
                                    color: '#02111b',
                                    padding: '15px 25px',
                                    borderRadius: '12px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 0 20px rgba(56,248,136,0.6)',
                                    zIndex: 999,
                                    animation: 'popup 0.5s ease'
                                }}
                            >
                                Message Sent Successfully 🚀
                            </div>

                        )
                    }

                    {/* ADDRESS SECTION */}

                    <div
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            padding: '40px',
                            borderRadius: '25px',
                            backdropFilter: 'blur(10px)',
                            lineHeight: '2'
                        }}
                    >

                        <h2
                            style={{
                                color: '#38f888',
                                marginBottom: '20px'
                            }}
                        >
                            Contact Information
                        </h2>

                        <p>
                            BNT IOT  Private Limited
                        </p>

                        <p>
                            New Delhi, India
                        </p>

                        <p>
                            Email : info@bntiot.com
                        </p>

                        <p>
                            Phone : +91 9311931411
                        </p>

                        <br />

                        <iframe
                            title='map'
                            src='https://maps.google.com/maps?q=BNT%20IOT%20Private%20Limited@28.538471297151833,77.1988313231324&z=15&output=embed'
                            width='100%'
                            height='250'
                            style={{
                                border: 0,
                                borderRadius: '20px'
                            }}
                        ></iframe>

                    </div>

                </div>

            </section>

        </div>
    )
}

const inputStyle = {
    padding: '15px',
    border: 'none',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.12)',
    color: 'white',
    outline: 'none',
    fontSize: '16px'
}

export default Home