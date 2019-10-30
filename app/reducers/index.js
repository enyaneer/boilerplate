// import {combineReducers} from 'redux' if writing more than one reducer
// import axios from 'axios' if doing axios calls

//action creators
const EXAMPLE = "EXAMPLE"

const exampleAction = (requestedAction) => {
  return {type: EXAMPLE, requestedAction}
}

//thunks(if you're making axios calls)

// export const exampleThunk = () => async (dispatch) => {
//   const {data} = await axios.get('/api/example')
//   dispatch(exampleAction(data))
// }


//reducer(s)

const initialState = {
  someState : []
}

const dummyReducer = (state = initialState, action) => {
  switch(action.type) {
    case EXAMPLE:
      return {...state, someState: action.requestedAction}

    default:
      return state
  }
}

export default dummyReducer

//if more than one reducer

// const rootReducer = combineReducers({dummyReducer, someOtherReducer})

// export default rootReducer
