import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'

function Navbar() {

    const [menu, setMenu] = useState(false)

    const menuRef = useRef()

    // CLOSE MENU WHEN CLICK OUTSIDE

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [])

    return (

        <header className='navbar' ref={menuRef}>

            <div className='nav-left'>
                <img src={logo} alt='logo' className='logo-img' />
                <h2>BNT IOT Private Limited</h2>
            </div>

            <ul className={menu ? 'nav-links active' : 'nav-links'}>

                <li>
                    <NavLink
                        to='/'
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/services'
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Services
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/analytics'
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Analytics
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/contact'
                        onClick={() => setMenu(false)}
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Contact
                    </NavLink>
                </li>

            </ul>

            <div
                className='menu-icon'
                onClick={() => setMenu(!menu)}
            >
                {menu ? <FaTimes /> : <FaBars />}
            </div>

        </header>
    )
}

export default Navbar