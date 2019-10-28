import React,{useState} from 'react';

function Task(){
    const [taskText,setTaskText]=useState('');
    const [tasks,setTasks]=useState([]);
    const [completedTasks,setCompletedTasks]=useState([]);

    return(
        <div>
            <h3>Tasks</h3>
            <div className='form'>

            </div>
        </div>
    )

}

export default Task;