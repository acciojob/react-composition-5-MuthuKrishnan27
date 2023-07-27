
import React from "react";
import Tabs from "./Tabs"
import './../styles/App.css';

const App = () => {

  const tab = [
    [
    {title:"Tab 1",content:"Content for Tab 1"},
    {title:"Tab 2",content:"Content for Tab 2"},
    {title:"Tab 3",content:"Content for Tab 3"}
    ],
    [
      {title:"Tab A",content:"Content for Tab A"},
      {title:"Tab B",content:"Content for Tab B"},
      {title:"Tab C",content:"Content for Tab C"}
    ]
] 
  return (
    <div>
       <Tabs tabs={tab}/>
    </div>
  )
}

export default App
