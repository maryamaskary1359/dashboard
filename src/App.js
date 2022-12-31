import React from "react";
import routes from "./routes";
import {useRoutes} from 'react-router-dom'
import TobBar from "./Component/tobbar/TobBar";
import Sidbar from "./Component/sidBar/Sidbar";
import './App.css'
function App() {
  let route=useRoutes(routes)
  return (
  <>
  <TobBar/>
  <div className="container">
    <Sidbar/>
    {route}
  </div>
  </>
  );
}

export default App;
