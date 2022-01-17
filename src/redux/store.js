import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/character'
import thunk from 'redux-thunk'
import { getCharacters } from './actions/character'

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(getCharacters()).then(data => console.log(data))

export default store
