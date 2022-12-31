import React from 'react'
import './TobBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function TobBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
          <div className="topbarLeft">
            <span className="logo">logo</span>
          </div>
          <div className="topbarRight">
            <div className="topbarIconContainer">
              <NotificationsNoneIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon/>
            </div>
            <img src="logo192.png" alt="user" className='topAvatar'/>
          </div>
        </div>
       </div>
  )
}
