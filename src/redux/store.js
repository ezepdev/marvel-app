import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { getCharacter } from './actions'

const store = createStore(
    reducer,
    {
        character: {},
        status: null,
        error: null,
    },
    applyMiddleware(thunk)
)

store.dispatch(getCharacter()).then(() => {
    console.log(store.getState())
})

export default store
