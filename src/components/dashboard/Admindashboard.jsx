
import { useContext, useState } from 'react';
import { Authcontext } from '../../../context/Authprovider';

const Admindashboard = (props) => {

  // const [newTask, setNewTask] = useState({})
  const [userdata,setuserData] = useContext(Authcontext)

 const LogOutUser = () => {
    localStorage.setItem("loggedinuser",'')     
    props.changeUser('')
 }
                     
//  twowaybinding

 const [taskTitle, settaskTitle] = useState('')
  const [taskDate, setdate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  const [taskDescription, setdescription] = useState('')

 const loginHandler = (e) => {
  e.preventDefault()

  const NewTask = ({category,taskDate,taskDescription,taskTitle,active: false,completed: false,failed: false,newTask: true})

  const data = userdata

  data.forEach(function (elem) {
        if(assignTo == elem.firstname) {
          elem.tasks.push(NewTask)
          elem.taskNo.newTask = elem.taskNo.newTask+ 1
        }
  })

  setuserData(data)
   
  settaskTitle('')
  setdate('')
  setassignTo('')
  setcategory('')
  setdescription('')
 }
//  twowaybinding

  return (
    <div className="p-12 h-screen bg-[#1C1C1C] overflow-y-auto">
        {/* header */}

         <div className="header flex justify-between items-center text-white">
       <h1 className="text-xl">Hello <br /> <span className="text-2xl">admin</span> ✌️</h1>
       <button onClick={LogOutUser} className="bg-red-500 px-5 py-2 rounded">Log out</button>
       </div>
      
      {/* form */}
      
       <div className="mt-10 bg-[#2C2C2C] p-10 rounded-lg">
        <form onSubmit={loginHandler} className="flex flex-wrap flex-row justify-between items-start w-full">
          <div className="text-white">
            <h3 className="text-sm mb-1">Task title</h3>
            <input onChange={(e) => {
              settaskTitle(e.target.value)
            }} 
            value={taskTitle}
            className="mb-4 pr-20 bg-transparent border-white border-2" type="text" placeholder="Make a UI design" />

            <h3 className="text-sm mb-1">Date</h3>
            <input
            onChange={(e) => {
              setdate(e.target.value)
            }} 
            value={taskDate}
             className="mb-4 pr-20 bg-transparent border-white border-2"type="date" placeholder="dd/mm/yy" />

            <h3 className="text-sm mb-1">Assign to</h3>
            <input 
            onChange={(e) => {
              setassignTo(e.target.value)
            }} 
            value={assignTo}
            className="mb-4 pr-20 bg-transparent border-white border-2" type="text" placeholder="Employee name" />

            <h3 className="text-sm mb-1">Category</h3>
            <input
              onChange={(e) => {
                setcategory(e.target.value)
              }} 
              value={category}
            className="pr-20 bg-transparent border-white border-2" type="text" placeholder="Design,Dev etc" />
          </div>

          <div>
            <h3 className="text-white">Description</h3>
            <textarea
             onChange={(e) => {
              setdescription(e.target.value)
            }} 
            value={taskDescription}
            type="text" cols="60" rows="8" className="mb-1 bg-transparent border-white border-2 text-white"/>
            <br />
            <button className="bg-green-500 px-20 py-2 rounded-xl w-full">Create task</button>
          </div>
        </form>
       </div>

        {/* tasks */}
       <div>
          <h1 className="text-white text-2xl mt-10">Tasks</h1>
          <div className="flex justify-between items-center bg-[#2C2C2C] p-5 rounded-lg mt-5">
                       <p className="text-white w-1/5">Employee Name</p>
                       <p className="text-white w-1/5">New task</p>
                       <p className="text-white w-1/5">Active Task</p>
                       <p className="text-white w-1/5">Completed</p>
                       <p className="text-white w-1/5">Failed</p>
                       </div>
          {userdata.map(function(elem, index){
                       return <div key={index} className="flex justify-between items-center bg-[#2C2C2C] p-5 rounded-lg mt-5">
                       <p className="text-white w-1/5">{elem.firstname}</p>
                       <p className="text-blue-400 w-1/5">{elem.taskNo.newTask}</p>
                       <p className="text-yellow-500 w-1/5">{elem.taskNo.active}</p>
                       <p className="text-green-400 w-1/5">{elem.taskNo.completed}</p>
                       <p className="text-red-500 w-1/5">{elem.taskNo.failed}</p>
                       </div>
          })}
          
       </div>

    </div>
  )
}

import PropTypes from 'prop-types';

Admindashboard.propTypes = {
  changeUser: PropTypes.func,
};

export default Admindashboard        