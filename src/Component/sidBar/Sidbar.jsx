import React from 'react'
import './Sidbar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';

import {Link} from 'react-router-dom'
export default function Sidbar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidbarMenue">
            <h3 className="sidbarTitle">Dasboard</h3>
            <ul className="sidbarList">
                <Link to='/' className='link'>
                <li className="sidbarListItem activ">
                   <LineStyleIcon className='sidbarIcon'/>
                   Home
                </li>
                </Link>
                <li className="sidbarListItem">
                   <TimelineIcon  className='sidbarIcon'/>
                   Analytic
                </li>
                <li className="sidbarListItem">
                   <TrendingUpIcon className='sidbarIcon'/>
                   Sales
                </li>
            </ul>
        </div>
        <div className="sidbarMenue">
            <h3 className="sidbarTitle">Quic Menue</h3>
            <ul className="sidbarList">
            <Link to='/userList' className='link'>
                <li className="sidbarListItem ">
                   <Person2OutlinedIcon className='sidbarIcon'/>
                   users
                </li>
                </Link>
                <Link to='/newUsers' className='link'>
                <li className="sidbarListItem">
                   <Person2OutlinedIcon  className='sidbarIcon'/>
                   New Users
                </li>
                </Link>
                <Link to='/products' className='link'>
                <li className="sidbarListItem">
                   <StorefrontIcon className='sidbarIcon'/>
                  Products
                </li>
                </Link>
                <li className="sidbarListItem">
                   <AttachMoneyIcon className='sidbarIcon'/>
                  Transaction
                </li>
                <li className="sidbarListItem">
                   <BarChartIcon className='sidbarIcon'/>
                  Report
                </li>
            </ul>
        </div>
        <div className="sidbarMenue">
            <h3 className="sidbarTitle">Notification</h3>
            <ul className="sidbarList">
                <li className="sidbarListItem ">
                   <MailOutlineIcon className='sidbarIcon'/>
                   Mail
                </li>
                <li className="sidbarListItem">
                   <DynamicFeedOutlinedIcon  className='sidbarIcon'/>
                   Feedback
                </li>
                <li className="sidbarListItem">
                   <ChatBubbleOutlineRoundedIcon className='sidbarIcon'/>
                   Messages
                </li>
            </ul>
        </div>
        <div className="sidbarMenue">
            <h3 className="sidbarTitle">Notification</h3>
            <ul className="sidbarList">
                <li className="sidbarListItem ">
                   <WorkOutlineOutlinedIcon className='sidbarIcon'/>
                   Manage
                </li>
                <li className="sidbarListItem">
                   <TimelineIcon className='sidbarIcon'/>
                   Analytics
                </li>
                <li className="sidbarListItem">
                   <ReportIcon className='sidbarIcon'/>
                   Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
