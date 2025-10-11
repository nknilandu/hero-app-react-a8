import { NavLink, Link } from 'react-router';
import logo from '../../assets/logo.png'
import { RiMenu2Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";









export default function Navbar() {

    const linkClass = ({ isActive }) => `hover:text-[#9f62f2] ${ isActive ? 'text-[#9a5ff1]' : 'text-black'}`;

    const list = <ul className=' flex flex-col lg:flex-row items-center gap-5 font-medium '>
        <li><NavLink className={linkClass} to='/'>Home</NavLink></li>
        <li><NavLink className={linkClass} to='/apps'>Apps</NavLink></li>
        <li><NavLink className={linkClass} to='/installation'>Installation</NavLink></li>
    </ul>

    return (
        <div>

            <div className=" bg-white shadow-sm">
                <div className='navbar max-w-7xl mx-auto px-4'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                                <div className="h-5 w-5 flex items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <RiMenu2Fill className='text-black text-lg' />
                                </div>
                            </div>
                            {<ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-fit p-2 shadow">
                                {list}
                            </ul>}
                        </div>

                        <Link className="text-xl flex items-center gap-2" to='/' >
                            <img className='h-5.5' src={logo} alt="logo" />
                            <h1 className='text-[#733ce7] font-bold'>HERO.IO</h1>
                        </Link>

                    </div>
                   
                    <div className="navbar-center hidden lg:flex">
                        {list}
                    </div>
                    <div className="navbar-end">

                        <a href='https://github.com/nknilandu' target='blank' className='flex items-center gap-2 text-white bg-gradient-to-br from-[#632de3] to-[#9f62f2] rounded-md px-3 py-2 hover:shadow-lg transition-all'>
                            <FaGithub />
                            <h3>Contribute</h3>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}




//  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />