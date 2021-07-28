import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.pexels.com/photos/6341405/pexels-photo-6341405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="coffe" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, illum?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-linkedin-in"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>

        </div>
    )
}
