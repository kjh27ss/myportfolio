import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { VscClose, VscMenu } from "react-icons/vsc";
import {ReactComponent as MyLogo} from "../assets/logo.svg";
import './style.css';
import {BsInstagram,BsFacebook,BsGithub} from "react-icons/bs"
import {RiKakaoTalkLine} from "react-icons/ri"

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    setIsActive(!isActive);
  }
  return (
    <>
        <header className='fixed-top site__header'>
            <div className='d-flex align-items-center justify-content-between'>
                <Link to="/" className='navbar-brand nav_ac'>
                    <MyLogo className='mylogo'/>
                </Link>
                <div className='d-flex align-items-center'>
                    {/* toggle */}
                    <button className='menu__button nav_ac' onClick={handleToggle}>
                        {!isActive ? <VscClose/> : <VscMenu/>}
                    </button>
                </div>
            </div>
            <div className={`${isActive ? "" : "menu_opend"} site__navigation`}>
                <div className='bg__menu h-100'>
                    <div className='menu_wrapper'>
                        <div className='menu__container p-3'>
                            <ul className='the_menu'>
                                <li className='menu_item'>
                                    <Link onClick={handleToggle} to='/' className='my-3'>
                                        Home
                                    </Link></li>
                                    <li className='menu_item'>
                                    <Link onClick={handleToggle} to='/portfolio' className='my-3'>
                                        Portfolio
                                    </Link>
                                    </li>
                                    <li className='menu_item'> 
                                    <Link onClick={handleToggle} to='/about' className='my-3'>
                                        About
                                    </Link>
                                    </li>
                                    <li className='menu_item'>
                                    <Link onClick={handleToggle} to='/contact' className='my-3'>
                                        Contact
                                    </Link>
                                    </li>                                
                            </ul>
                        </div>
                    </div>
                </div>            
            
                <div className='menu__footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-2'>
                    <div className='d-flex'>
                        <a href='#' className='insta'><BsInstagram/></a>
                        <a href='#'><BsFacebook/></a>
                        <a href='#'><BsGithub/></a>
                        <a href='#' className='kakao'><RiKakaoTalkLine/></a>
                    </div>
                    <p className='copyright m-0'>&copy; 2023. Choi Min Joung All rights reserved.</p>                   
                </div>
            </div>
        </header>
        <div className='br-top'></div>
        <div className='bt-bottom'></div>
        <div className='br-left'></div>
        <div className='br-right'></div>
    </>
  )
}

export default Header