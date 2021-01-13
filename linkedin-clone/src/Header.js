import React from 'react'
import './Header.css'

import HeaderOption from './HeaderOption'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>

            </div>
            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisedUserCircleIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="My Network" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption
                    avatar="https://instagram.fdac5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73184571_678309442665172_6288068288710705152_n.jpg?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_ohc=hfqL8MSWAwUAX-WIIzD&tp=1&oh=13eb25050b23d0d58ffed5cffcd2ffaf&oe=60293BD0"
                    title="Me" />
            </div>
        </div>
    )
}

export default Header;
