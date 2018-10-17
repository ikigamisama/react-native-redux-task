import * as types from '../actions/actionTypes';


const taskReducers = (tasks = [],action) => {
    switch(action.type){
        case types.ADD_NEW_TASK:
            return [
                ...tasks,
               {
                taskId:action.taskId,
                taskName:action.taskName,
                completed:false
               }
            ]
        case types.TOGGLE_ONE_TASK:
            return tasks.map(task =>{
                (task.taskId === action.taskId) ? {...task,completed:!task.taskId} : task
            })
        default:
            return tasks;
    }
}


export default taskReducers;