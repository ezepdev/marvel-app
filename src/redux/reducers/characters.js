const fetchCharacterReducer = (
    state = {
        data: [],
        offset: 0,
        status: 'loading',
    },
    action
) => {
    switch (action.type) {
        case 'START_FETCH':
            return {
                ...state,
                data: charactersReducer(state.data, action),
                status: 'loading',
            }
        case 'SUCCESS_FETCH_CHARACTERS':
            return {
                ...state,
                offset: state.offset + 50,
                data: charactersReducer(state.data, action),
                status: 'success',
            }
        case 'SUCCESS_FIND_CHARACTERS':
            return {
                ...state,
                offset: 0,
                data: charactersReducer(state.data, action),
                status: 'success',
            }
        case 'ERROR_FETCH':
            return {
                ...state,
                data: charactersReducer(state.data, action),
                status: 'error',
                error: action.error,
            }
        default:
            return state
    }
}

const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case 'START_FETCH':
            return state
        case 'SUCCESS_FETCH_CHARACTERS':
            return state.concat(action.payload)
        case 'SUCCESS_FIND_CHARACTERS':
            return action.payload
        case 'ERROR_FETCH':
            return state
        default:
            return state
    }
}

export default fetchCharacterReducer
