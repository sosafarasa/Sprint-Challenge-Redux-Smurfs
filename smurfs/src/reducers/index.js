import {FETCHING, SUCCESS, FAILURE, ADD_SMURF} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = ( state = initialState, action) {
  switch(action.type){
    case FETCHING:
      return {...state, smurfs: [], fetchingSmurfs: true, error: null}
    case SUCCESS:
      return {...state, smurfs: [action.payload], fetchingSmurfs: false, error: null}
    case FAILURE:
      return {...state, smurfs: [], fetchingSmurfs: false, error: 'Oh oh, something went wrong...'}
    case ADD_SMURF:
      return {...state, smurfs: [action.payload], fetchingSmurfs: false, error: null}
  }
}