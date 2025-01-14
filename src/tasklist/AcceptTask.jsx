import PropTypes from 'prop-types';

const AcceptTask = ({data}) => {

  return (
    <div className="flex-shrink-0 h-[180px] w-[300px] bg-blue-500 rounded px-3 ">
    <div className="flex justify-between items-center px-1.5 py-2">
        <h2 className="bg-red-400 px-2 py-1 rounded">{data.category}</h2>
        <h3>{data.taskDate}</h3>
    </div>

    <h1>{data.taskTitle}</h1>
    <h3 className="mt-2">{data.taskDescription}</h3>

    <div className="flex justify-between mt-2 mb-3">
        <button className="bg-orange-500 py-1 px-1 text-sm">mark as completed</button>
        <button className="bg-amber-500 px-2 py-1 text-sm">mark as failed</button>
    </div>
</div>
  )
}

AcceptTask.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    taskDate: PropTypes.string,
    taskDescription: PropTypes.string,
    taskTitle: PropTypes.string,
  }).isRequired,
};

export default AcceptTask