import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import charactersReducer from './characters'

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        characters: charactersReducer,
    })

export default createRootReducer
