const fetchCharacterReducer = (
    state = {
        characters: [],
        offset: 0,
        status: 'loading',
    },
    action
) => {
    switch (action.type) {
        case 'START_FETCH_CHARACTERS':
            return {
                ...state,
                characters: charactersReducer(state.characters, action),
                status: 'loading',
            }
        case 'SUCCESS_FETCH_CHARACTERS':
            return {
                ...state,
                offset: state.offset + 50,
                characters: charactersReducer(state.characters, action),
                status: 'success',
            }
        case 'ERROR_FETCH_CHARACTERS':
            return {
                ...state,
                characters: charactersReducer(state.characters, action),
                status: 'error',
                error: action.error,
            }
        default:
            break
    }
}

const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case 'START_FETCH_CHARACTERS':
            return state
        case 'SUCCESS_FETCH_CHARACTERS':
            return state.concat(action.payload)
        case 'ERROR_FETCH_CHARACTERS':
            return state
        default:
            break
    }
}

export default fetchCharacterReducer
