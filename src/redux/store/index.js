import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getCharacters } from '../actions/characters'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from 'redux/reducers'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default function startStore() {
    const store = createStore(
        rootReducer(history),
        applyMiddleware(routerMiddleware(history), thunk)
    )

    // init the app with characters 
    store.dispatch(getCharacters())

    return store
}

