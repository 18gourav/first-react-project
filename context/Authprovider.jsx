/* eslint-disable react-refresh/only-export-components */

import PropTypes from 'prop-types';
import { createContext,useState,useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../src/utils/localStorage';

export const Authcontext = createContext()

const Authprovider = ({children}) => {

 const [userdata, setuserData] = useState(null)

 useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setuserData(employees)          
 }, [])
//  const data = getLocalStorage()
//  console.log(data)

  return (
    <div>
        <Authcontext.Provider value={[userdata,setuserData]}>
               {children}     
        </Authcontext.Provider>
    </div>
  )
}

Authprovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authprovider