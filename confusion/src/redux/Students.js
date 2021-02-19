import * as ActionTypes from './ActionTypes';

export const Students = (
   state = { 
       isLoading: true,
       errMess: null,
       students:[]}
      , action) => {
    switch (action.type) {
        case ActionTypes.ADD_STUDENTS:
            return {...state, isLoading: false, errMess: null, students: action.payload};

        case ActionTypes.STUDENTS_LOADING:
            return {...state, isLoading: true, errMess: null, students: []}

        case ActionTypes.STUDENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

