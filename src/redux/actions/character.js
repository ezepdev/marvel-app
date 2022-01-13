import fetchCharacters from 'services'

const startFetchCharacters = () => {
    return {
        type: 'START_FETCH_CHARACTERS',
    }
}

const failFetchCharacters = error => {
    return {
        type: 'ERROR_FETCH_CHARACTERS',
        error,
    }
}

const successFetchCharacters = characters => {
    return {
        type: 'SUCCESS_FETCH_CHARACTERS',
        payload: characters,
    }
}

const getCharacters = () => {
    return dispatch => {
        dispatch(startFetchCharacters())

        return fetchCharacters()
            .then(res => dispatch(successFetchCharacters(res)))
            .catch(err => dispatch(failFetchCharacters(err)))
    }
}

export { getCharacters }
