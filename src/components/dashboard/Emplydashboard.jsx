

import PropTypes from 'prop-types';
import AcceptTask from '../../tasklist/AcceptTask';
import CompleteTask from '../../tasklist/CompleteTask';
import NewTask from '../../tasklist/NewTask';
import FailedTask from '../../tasklist/FailedTask';


const Emplydashboard = (props) => {

  const LogOutUser = () => {
    localStorage.setItem('loggedinuser','')
    props.changeUser('')
  }

  return (
    <div className="p-12 h-screen bg-[#1C1C1C] overflow-y-auto" >
       {/* header */}
       <div className="header flex justify-between items-center text-white">
       <h1 className="text-xl">Hello <br /> <span className="text-2xl">{props.data.firstname}</span> ✌️</h1>
       <button onClick={LogOutUser} className="bg-red-500 px-5 py-2 rounded">Log out</button>
       </div>

       {/* mid section */}
       <div className=" flex justify-between items-center mt-10 gap-3">
        <div className="bg-red-500 px-5 py-4 rounded-xl  w-1/4">
            <h2>{props.data.taskNo.newTask}</h2>
            <h1>New task</h1>
        </div>

        <div className="bg-blue-500 px-5 py-4 rounded-xl  w-1/4">
            <h2>{props.data.taskNo.completed}</h2>
            <h1>Complete task</h1>
        </div>

        <div className="bg-green-500 px-5 py-4 rounded-xl  w-1/4">
            <h2>{props.data.taskNo.active}</h2>
            <h1>Accepted task</h1>
        </div>

        <div className="bg-yellow-500 px-5 py-4 rounded-xl  w-1/4">
            <h2>{props.data.taskNo.failed}</h2>
            <h1>Failed task</h1>
        </div>

       </div>
        
        {/* taskbar */}
        <div id="taskbar" className="h-[55%] flex justify-start items-center mt-10 px-3 py-4 gap-2.5 overflow-x-auto">
                {props.data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />;
                    } 
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />;
                    } 
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />;
                    } 
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />;
                    }
                })}

        </div>

     </div>
  )
}

Emplydashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    taskNo: PropTypes.shape({
      newTask: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      failed: PropTypes.number.isRequired,
    }).isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool,
        newTask: PropTypes.bool,
        completed: PropTypes.bool,
        failed: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default Emplydashboard;