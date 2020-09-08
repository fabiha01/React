import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    // in the state we will have two properties
    // auth and project
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;