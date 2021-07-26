import React from 'react'
import Header from "./Header.jsx"
import TimeTable from "../../timeAvailable/TimeTable.jsx"

const Index = ({id,logo,name}) => {
    return (
        <div id={id} className="bg-white p-3 mb-3 shadow rounded">
           <Header id={id} logo={logo} name={name} />
           {/* <TimeTable /> */}
        </div>
    )
}

export default Index
