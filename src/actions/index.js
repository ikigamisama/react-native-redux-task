import * as types from './actionTypes';

let newTaskId = 0;


export const addNewTask = (inputTaskName) => {
    return {
        type:types.ADD_NEW_TASK,
        taskId:newTaskId++,
        taskName:inputTaskName
    }
}


export const toggleTask = (taskId) => {
    return {
        type:types.TOGGLE_ONE_TASK,
        taskId:taskId
    }
}