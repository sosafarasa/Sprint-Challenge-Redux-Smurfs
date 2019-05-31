import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function fetchData(){
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:3333/smurfs')
      .then (response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FAILURE
        })
      })
  }
}

export function addSmurf(smurf){
  return dispatch => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.dir({ responseData: response.data });
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FAILURE
        })
      })
  }
}

export function deleteSmurf(id) {
  console.log(id)
  return dispatch => {
    console.log(`http://localhost:3333/smurfs/${id}`)
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then( res => {
        dispatch({
          type: DELETE_SMURF,
          payload: res.data
        })
      })
      .catch( err => {
        dispatch({
          type: FAILURE,
          payload: 'failed to delete'
        })
      })
  }
}