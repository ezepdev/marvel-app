import fetchCharacter from 'services'

const startFetchCharacter = () => {
    return {
        type: 'START_FETCH_CHARACTER',
    }
}

const failFetchCharacter = error => {
    return {
        type: 'ERROR_FETCH_CHARACTER',
        error,
    }
}

const successFetchCharacter = character => {
    return {
        type: 'SUCCESS_FETCH_CHARACTER',
        payload: character,
    }
}

const getCharacter = () => {
    return dispatch => {
        dispatch(startFetchCharacter())

        return fetchCharacter()
            .then(res => dispatch(successFetchCharacter(res)))
            .catch(err => dispatch(failFetchCharacter(err)))
    }
}

export { getCharacter }
