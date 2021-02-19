import * as ActionTypes from './ActionTypes';



export const Feedbacks = (state = {
  isLoading: true,
  errMess: null,
  feedbacks: []
}, action) => {
  switch (action.type) {
    // case ActionTypes.ADD_FEEDBACK:
    //   return { ...state, isLoading: false, errMess: null, feedbacks: action.payload };

    case ActionTypes.FEEDBACK_LOADING:
      return { ...state, isLoading: true, errMess: null, feedbacks: [] }

    case ActionTypes.FEEDBACK_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

     case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
       // comment.id = state.comments.length;
       // comment.date = new Date().toISOString();
        return { ...state, feedback: state.feedbacks.concat(feedback)};

    default:
      return state;
  }
};

