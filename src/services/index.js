import axios from 'axios'
import config from 'config'

const getCharactersMoreImportants = offset => {
    return getCharacters({ offset }).then(characters =>
        filterByCharactersWithImage(characters)
    )
}

const filterByCharactersWithImage = characters => {
    return characters.filter(
        character => !character.thumbnail.path.includes('image_not_available')
    )
}

const getCharacters = ({ offset = 0, limit = 50 }) => {
    return axios({
        method: 'GET',
        baseURL: config.baseURL,
        url: config.url.characters,
        params: {
            offset,
            limit,
            orderBy: '-modified',
            ts: config.keys.ts,
            apikey: config.keys.apikey,
            hash: config.keys.hash,
        },
    }).then(response => {
        return response.data.data.results
    })
}

export default getCharactersMoreImportants
