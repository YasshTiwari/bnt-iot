import React from 'react'

function About() {

    const bgImage =
        "https://media.istockphoto.com/id/1346294867/photo/smart-farming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=mPuLK9721W1qIvH74c3r1XcZYsENyrSzcr96IAGaW3c="

    return (
        <div
            className='page'
            style={{
                backgroundImage: `linear-gradient(
                    rgba(2,6,23,0.88),
                    rgba(15,23,42,0.92)
                ), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '120px 8%',
                marginTop: '50px'
            }}
        >

            <div
                style={{
                    maxWidth: '900px',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '50px',
                    borderRadius: '25px',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 0 30px rgba(56,189,248,0.2)',
                    color: 'white'
                }}
            >

                <h1
                    style={{
                        fontSize: '55px',
                        marginBottom: '25px',
                        color: '#38bdf8',
                        textAlign: 'center'
                    }}
                >
                    About Us
                </h1>

                <p
                    style={{
                        fontSize: '20px',
                        lineHeight: '2',
                        color: '#e2e8f0',
                        marginBottom: '25px',
                        textAlign: 'justify'
                    }}
                >
                    BNT-IOT delivers advanced Industrial IoT solutions for
                    smart industries, agriculture monitoring, GPS tracking,
                    AI analytics, cloud monitoring and automation systems.
                    Our innovative technologies help industries improve
                    productivity, efficiency and real-time decision making.
                </p>

                <p
                    style={{
                        fontSize: '20px',
                        lineHeight: '2',
                        color: '#e2e8f0',
                        marginBottom: '25px',
                        textAlign: 'justify'
                    }}
                >
                    We specialize in smart farming technologies, RFID asset
                    tracking, fleet monitoring, industrial automation and
                    intelligent dashboard systems. Our cloud-integrated
                    platforms provide secure, scalable and high-performance
                    monitoring solutions for modern businesses.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                        gap: '25px',
                        marginTop: '40px'
                    }}
                >

                    <div
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
                            3Lakh +
                        </h2>

                        <p>Connected Devices</p>
                    </div>

                    <div
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

                    <div
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

            </div>

        </div>
    )
}

export default About