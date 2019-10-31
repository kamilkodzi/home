import React,{useState,useEffect} from 'react';
import uuid from 'uuid/v4';

const TASK_STORAGE_KEY='TASK_STORAGE_KEY';

const storeTasks=(taskMap)=>{
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(taskMap)
    );
}

const readStoredTasks=()=>{
    const taskMap=JSON.parse(localStorage.getItem(TASK_STORAGE_KEY))

    return taskMap?taskMap:{task:[],completedTasks:[]};
}

function Task(){
    const [taskText,setTaskText]=useState('');
    const storedTasks=readStoredTasks();
    const [tasks,setTasks]=useState(storedTasks.tasks);
    const [completedTasks,setCompletedTasks]=useState(storedTasks.completedTasks);


useEffect(()=>{
    storeTasks({tasks,completedTasks});
});


    const updateTaskText=event=>{
        setTaskText(event.target.value);
    }

    const addTask=()=>{
        setTasks([...tasks,{taskText,id:uuid()}]);
    }

    const completeTask=completedTask=>()=>{
        setCompletedTasks([...completedTasks,completedTask]);
        setTasks(tasks.filter(task=>task.id!==completedTask.id));
    }

    const deleteTask=task=>()=>{
        setCompletedTasks(completedTasks.filter(completedTask=>task.id!==completedTask.id));
    }

    console.log('tasks',tasks);
    console.log('completedTasks', completedTasks);

    return(
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText}/>
            <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task=>{
                        const{id,taskText}=task;
                        return (
                        <div key={id} onClick={completeTask(task)}>
                            {taskText}
                        </div>
                        );
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task=>{
                        const{id,taskText}=task;
                        return(
                            <div key={id}>{taskText}{' '}<span onClick={deleteTask(task)} className='delete-task'>x</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Task;