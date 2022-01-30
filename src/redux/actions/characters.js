import { findByName, getCharactersMoreImportants } from 'services'

const startFetch = () => {
    return {
        type: 'START_FETCH',
    }
}

const failFetch = error => {
    return {
        type: 'ERROR_FETCH',
        error,
    }
}

const successFetchCharacters = characters => {
    return {
        type: 'SUCCESS_FETCH_CHARACTERS',
        payload: characters,
    }
}

const successFindCharacters = characters => {
    return {
        type: 'SUCCESS_FIND_CHARACTERS',
        payload: characters,
    }
}

const getCharacters = () => {
    return (dispatch, getState) => {
        console.log(getState())
        dispatch(startFetch())
        const { offset } = getState().characters
        return getCharactersMoreImportants(offset)
            .then(res => dispatch(successFetchCharacters(res)))
            .catch(err => dispatch(failFetch(err)))
    }
}

const findCharacterByName = name => {
    return dispatch => {
        dispatch(startFetch())

        return findByName(name)
            .then(res => {
                dispatch(successFindCharacters(res))
            })
            .catch(err => dispatch(failFetch(err)))
    }
}

export { getCharacters, findCharacterByName }
