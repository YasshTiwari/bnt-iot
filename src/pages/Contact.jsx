import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {

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

    return (<div className='contact-page'>

        <div className='contact-overlay'></div>

        <div className='contact-container'>

            {/* HEADING */}

            <div className='contact-header'>

                <h1 className='title'>
                    Contact Us
                </h1>

                <p className='contact-subtitle'>
                    Connect with BNT-IOT for Industrial IoT,
                    AI Analytics, GPS Tracking and
                    Smart Automation Solutions.
                </p>

            </div>

            {/* MAIN SECTION */}

            <div className='contact-content'>

                {/* LEFT SIDE */}

                <div className='contact-info'>

                    <div className='info-box'>

                        <h2>Address</h2>

                        <p>
                            BNT-IOT Technologies Pvt Ltd
                        </p>

                        <p>
                            2nd Floor, 4A, Sri Aurobindo Marg,
                            Adchini, New Delhi - 110017
                        </p>

                    </div>

                    <div className='info-box'>

                        <h2>Email</h2>

                        <p>
                            info@bntiot.com
                        </p>

                    </div>

                </div>

                {/* RIGHT SIDE FORM */}

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='contact-form'
                >

                    <h2 className='form-title'>
                        Mail Us
                    </h2>

                    <div className='input-group'>

                        <input
                            type='text'
                            name='user_name'
                            required
                        />

                        <label>Name</label>

                    </div>

                    <div className='input-group'>

                        <input
                            type='email'
                            name='user_email'
                            required
                        />

                        <label>Email</label>

                    </div>

                    <div className='input-group'>

                        <textarea
                            name='message'
                            rows='6'
                            required
                        ></textarea>

                        <label>Message</label>

                    </div>

                    <button type='submit'>
                        Send Message
                    </button>

                </form>

            </div>


        </div>

    </div>)
}

export default Contact