// import Button from './class-components'
//import Calculator2 from './calculator'
// import RefsFunc from './refs-func'
// import MessageBox from './state-func'
import { userContext } from './context'
import React from 'react'
import Header2 from './context-header2'
import Context2 from './context-content2'

export default function App() {
  let [user,setUser] = React.useState('')
  return(
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Context2/>
    </userContext.Provider>
  )
}
