import axios from 'axios'

const getCharactersMoreImportants = () => {
    return getCharacters().then(characters =>
        filterByCharactersWithImage(characters)
    )
}

const filterByCharactersWithImage = characters => {
    return characters.filter(
        character => !character.thumbnail.path.includes('image_not_available')
    )
}

const getCharacters = () => {
    return axios({
        method: 'GET',
        baseURL: 'https://gateway.marvel.com/',
        url: `/v1/public/characters`,
        params: {
            ts: '1',
            limit: 100,
            orderBy: 'modified',
            apikey: '28db5b0966047fd5479e7d68824aec36',
            hash: '61a55d24492720b1c547e56135c31358',
        },
    }).then(response => {
        return response.data.data.results
    })
}

export default getCharactersMoreImportants
