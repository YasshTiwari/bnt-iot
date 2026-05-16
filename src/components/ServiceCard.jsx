import React, { useEffect, useRef, useState } from 'react'
import './ServiceCard.css'

function ServiceCard({ title, text }) {

    const [active, setActive] = useState(false)

    const cardRef = useRef()

    useEffect(() => {

        const handleScroll = () => {

            // REMOVE EFFECT ON DESKTOP
            if (window.innerWidth > 768) {
                setActive(false)
                return
            }

            const card = cardRef.current

            if (!card) return

            const rect = card.getBoundingClientRect()

            const cardCenter = rect.top + rect.height / 2

            const screenCenter = window.innerHeight / 2

            const distance = Math.abs(screenCenter - cardCenter)

            // ONLY CENTER CARD ACTIVE
            if (distance < 120) {
                setActive(true)
            } else {
                setActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div
            ref={cardRef}
            className={`service-card ${active ? 'active' : ''}`}
        >
            <h2 className='service-title'>{title}</h2>
            <p className='service-text'>{text}</p>
        </div>
    )
}

export default ServiceCard