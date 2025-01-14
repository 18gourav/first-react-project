import PropTypes from 'prop-types';

const CompleteTask = ({data}) => {
  return (

    <div className="flex-shrink-0 h-[180px] w-[300px] bg-blue-500 rounded px-3">
    <div className="flex justify-between items-center px-1.5 py-2">
        <h2 className="bg-red-400 px-2 py-1 rounded">{data.category}</h2>
        <h3>{data.taskDate}</h3>
    </div>

    <h1>{data.taskTitle}</h1>
    <h3 className="mt-2">{data.taskDescription}</h3>

    <div className="flex justify-between items-center mt-2">
      <button className='bg-amber-500 py-1 px-2 text-sm w-full '>Completed</button>
    </div>
                      
    </div>
  )
} 

CompleteTask.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    taskDate: PropTypes.string,
    taskDescription: PropTypes.string,
    taskTitle: PropTypes.string, 
  }).isRequired,
};

export default CompleteTask