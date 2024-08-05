import React from "react";

export default class Calender extends React.Component{
    getDate(){
        const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
        const date = new Date()
        const weekday = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${weekday} ${day} ${month} ${year}`
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}