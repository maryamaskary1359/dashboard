import React ,{useState,useEffect} from 'react'
import {transactions} from './../../datas'
import './widgetlg.css'
export default function WidgetLg() {
  const [transActions,setTtansActions]=useState([])
   
  useEffect ( ()=>{
    fetch('https://dashboard-83568-default-rtdb.firebaseio.com/transAction.json')
     .then(res=>res.json())
     .then(data=>{
      console.log(Object.entries(data));
      setTtansActions(Object.entries(data))
     })
  },[])
   console.log(transActions[0]);
    const Button=({type})=>{
         return  <button className={'WidgetLgButton ' + type}>{type}</button>
    }
  return (
    <div className='WidgetLg '>
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
       <table className="WidgetLgTable">
        <thead>
        <tr className="WidgetLgTr">
            <th className="WidgetLgTh">Customer</th>
            <th className="WidgetLgTh">Date</th>
            <th className="WidgetLgTh">Amout</th>
            <th className="WidgetLgTh">Status</th>
        </tr>
        </thead>
        <tbody>
        {transactions.map(transaction=>(
             <tr key={transaction.id} className="WidgetLgTr">
            <td className="WidgetLgUser">
                <img src={transaction.img} alt="" className="WidgetLgImg" />
                <span className="WidgetLgName">{transaction.name}</span>
            </td>
            <td className="WidgetLgData">{transaction.date}</td>
            <td className="WidgetLgAmout">${transaction.amout}</td>
            <td className="WidgetLgStatus">
              <Button type={transaction.type}></Button>
            </td>
        </tr>
        ))}
     
         {/* {transActions.length>0 && (
          transActions[0][1].map(transAction=>(
             <tr key={transAction.id} className="WidgetLgTr">
            <td className="WidgetLgUser">
                <img src={transAction.img} alt="" className="WidgetLgImg" />
                <span className="WidgetLgName">{transAction.name}</span>
            </td>
            <td className="WidgetLgData">{transAction.date}</td>
            <td className="WidgetLgAmout">${transAction.amout}</td>
            <td className="WidgetLgStatus">
              <Button type={transAction.type}></Button>
            </td>
        </tr>
          ))
         )} */}
       
       </tbody>
       </table>
    
    </div>
  )
}
