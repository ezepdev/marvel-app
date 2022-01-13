const fetchCharacterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'START_FETCH_CHARACTERS':
            return {
                ...state,
                status: 'loading',
            }
        case 'SUCCESS_FETCH_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
                status: 'success',
            }
        case 'ERROR_FETCH_CHARACTERS':
            return {
                ...state,
                status: 'error',
                error: action.error,
            }
        default:
            break
    }
}

export default fetchCharacterReducer
