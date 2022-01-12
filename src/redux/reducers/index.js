const fetchCharacterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'START_FETCH_CHARACTER':
            return {
                ...state,
                status: 'loading',
            }
        case 'SUCCESS_FETCH_CHARACTER':
            return {
                ...state,
                status: 'success',
                character: action.payload,
            }
        case 'ERROR_FETCH_CHARACTER':
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
