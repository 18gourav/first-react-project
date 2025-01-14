import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import { setLocalStorage } from "../../utils/localstorage";

const Login = ({handlelogin}) => {

      const [value, setvalue] = useState("")
      const [password, setpassword] = useState("")

      const submitHandler = (e) => {
                e.preventDefault();
                handlelogin(value,password)
                setpassword("")
                setvalue("")
      }

      useEffect(() => {
  
        setLocalStorage()
      
        
      }, [])
      

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-9 bg-black text-white">
        <h1>Login</h1>

        <div className="border-green-500 border-2 px-10 py-10 rounded-xl ">
          <form 
          onSubmit={submitHandler}
          className="flex  flex-col items-center justify-center gap-3">
            <input      
            onChange={(e) => 
              setvalue(e.target.value)}
              value={value}
            required type="email" placeholder="Email" className="border-emerald-600 border-2 px-2 py-0.25 rounded-xl bg-black" />

            <input 
            onChange={(e) => 
              setpassword(e.target.value)}
              value={password}
            required type="password" placeholder="Password" className="border-emerald-600 border-2 px-2 py-0.25 rounded-xl bg-black" />
            <button className="bg-emerald-600 w-full rounded-xl px-1 py-1 hover:bg-emerald-500">Log in</button>
          </form>
        </div>
       </div>                               
  )                                       
}                                         
Login.propTypes = {
  handlelogin: PropTypes.func.isRequired,
};

export default Login                