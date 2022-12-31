import React ,{useEffect, useState} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './widgetSm.css'
import {newMembers} from './../../datas'

export default function WidgetSm() {
   const[users ,setUsers]=useState([])
   

   useEffect(() => {
     fetch('https://maryam-41095-default-rtdb.firebaseio.com/product.json')
        .then(res=>res.json())
       .then(data=>{
        //  console.log(Object.entries(data)[0][1][1].img);
         setUsers(Object.entries(data))
       
        })
    
  }, [])
  //  console.log(users[0])
  
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        
          {newMembers.map(user=>(
             <li key={user.id} className="widgetSmListItem">
              <img src={user.img} alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.userName}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
             </div>
             <button className="widgetSmButton">
             <VisibilityIcon className='widgetSmIcon'/>
             </button>
           </li>
       
           
          ))}
          {/* {users.length>0 && (
           users[0][1].map(user=>(
              
         
             <li key={user.id} className="widgetSmListItem">
              <img src={user.img} alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.userName}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
             </div>
             <button className="widgetSmButton">
             <VisibilityIcon className='widgetSmIcon'/>
             </button>
           </li>
            
           
          ))
          )} */}
          
          
        </ul>
      
    </div>
  )
}
