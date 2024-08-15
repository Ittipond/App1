import React, { Component } from 'react';

// export class Calendar extends Component{
//     getDate(){
//         const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//         const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
//         const date = new Date()
//         const weekday = dayNames[date.getDay()]
//         const day = date.getDate()
//         const month = monthNames[date.getMonth()]
//         const year = date.getFullYear()
//         return `${weekday} ${day} ${month} ${year}`
//     }
//     render(){
//         return <div>{this.getDate()}</div>
//     }
// }
export default class Button extends Component{
    showAlert(msg){
        alert(msg)
    }
    onClickButtonOK = () => {
        this.showAlert('Hello')
    }
    render(){
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}