import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getCharacters } from '../actions/characters'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'redux/reducers'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export default function configureStore() {
    const store = createStore(
        createRootReducer(history),
        compose(applyMiddleware(routerMiddleware(history), thunk))
    )
    store.dispatch(getCharacters())

    console.log(store.getState())
    return store
}

export { history }
