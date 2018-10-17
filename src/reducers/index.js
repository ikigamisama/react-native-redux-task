import { combineReducers } from 'redux';
import taskReducers from './taskReducers';


const allReducers = combineReducers({
    taskReducers,
    //Add more if i want 
})

export default allReducers