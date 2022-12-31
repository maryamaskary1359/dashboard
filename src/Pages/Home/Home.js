import React from 'react'
import Feature from '../../Component/feature/Feature'
import Chart from './../../Component/chart/Chart'
import {xAxisData} from '../../datas'
import WidgetSm  from './../../Component/widgetSm/WidgetSm'
import WidgetLg  from './../../Component/widgetLg/WidgetLg'
import './Home.css'
export default function Home() {
  return (
    <div className="home">
      <Feature/>
      <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale'/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg />
      </div>
    </div>
    
  )
}



