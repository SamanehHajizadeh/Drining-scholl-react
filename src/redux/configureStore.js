import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Students } from './Students';
import { Feedbacks } from './feedbacks';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            sudents: Students,
            ...createForms ({ 
               Feedback : Feedbacks
             })
        }),
        applyMiddleware(thunk, logger)
        
    );
    return store;
}