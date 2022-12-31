import React from 'react'
import {ResponsiveContainer,Line,LineChart,XAxis,CartesianGrid,Tooltip} from 'recharts'
import './Chart.css'
export default function Chart({title ,data,dataKey,grid}) {
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width='100%' aspect={6}>
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550db'/>
            <Line dataKey={dataKey} stroke='#5550db' type='monotone'/>
            <Tooltip/>
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5'/>}
          </LineChart>
        </ResponsiveContainer>
      
    </div>
  )
}


