import Emplydashboard from './components/dashboard/Emplydashboard'; 
import Admindashboard from './components/dashboard/Admindashboard';
import Login from './components/auth/Login';

import { useState, useContext } from 'react';
import { Authcontext } from '../context/Authprovider';
import { useEffect } from 'react';
// import { useEffect } from 'react';
// import { setLocalStorage } from "./utils/localstorage"

const App = () => {

 const [user, setuser] = useState(null)
 const [LoggedInUser, setLoggedInUser] = useState(null)
 const [userdata] = useContext(Authcontext)
//  console.log(data) 

useEffect(() => {
if(userdata) {
  const loggedinuser = localStorage.getItem("loggedinuser")
 
  if(loggedinuser) {
   const userdata = JSON.parse(loggedinuser)
   setuser(userdata.role)
   setLoggedInUser(userdata.data)
  }     
}                     
},[userdata])

  const handlelogin = (email,password) => {
            if(email == "admin@me.com" && password == "123") {
              setuser("admin")
              localStorage.setItem("loggedinuser", JSON.stringify({role:'admin'}))
            }            
            else if(userdata) {  
              const employee = userdata.find((e)=>email == e.email && password == e.password)
              if(employee) {
                setuser("employee")
                setLoggedInUser(employee)
                localStorage.setItem("loggedinuser", JSON.stringify({role: 'employee', data: employee}))
            }
            }           
            else {                                     
              alert("Invalid Credentials")    
            }
  }           

  return (
    <>
     {!user ? <Login handlelogin={handlelogin} /> : null}
     {user == "admin" ? <Admindashboard changeUser={setuser} /> : user == "employee" ? <Emplydashboard changeUser = {setuser}  data={LoggedInUser}/> : null}
    </>
  )
}

export default App;