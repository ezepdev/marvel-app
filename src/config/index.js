let config = {
    baseURL: process.env.REACT_APP_API_URL,
    url: {
        characters: `/v1/public/characters`,
    },
    keys: JSON.parse(process.env.REACT_APP_API_KEYS),
}

export default config
