import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchStudents = () => (dispatch) => {    
  return fetch(baseUrl + 'students')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(students => dispatch(addStudents(students)))
  .catch(error => dispatch(studentsFailed(error.message)));
};

export const studentsFailed = (errmess) => ({
    type: ActionTypes.STUDENTS_FAILED,
    payload: errmess
});

export const addStudents = (students) => ({
    type: ActionTypes.ADD_STUDENTS,
    payload: students
});


export const studentsLoading = () => ({
  type: ActionTypes.STUDENTS_LOADING
});

export const feedbackLoading = () => ({
  type: ActionTypes.FEEDBACK_LOADING
});

export const feedbackFailed = (errmess) => ({
  type: ActionTypes.FEEDBACK_FAILED,
  payload: errmess
});

export const addFeedback = (message) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: message
});

export const postFeedback = (feedbackId, firstname, lastname, telnum, email, agree, contactType, messages) => (dispatch) => {
  const newFeedback = {
    feedbackId: feedbackId,
    firstname: firstname,
      lastname: lastname,
      telnum: telnum,
      email: email,
      agree: agree,
      contactType: contactType,
      messages: messages
  };
  newFeedback.date = new Date().toString;
    
  return fetch(baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addFeedback(response)))
  .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};
