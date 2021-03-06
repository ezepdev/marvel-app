import React, { useEffect } from 'react'
import Characters from 'containers/Characters'
import { findCharacterByName } from 'redux/actions/characters'
import { connect } from 'react-redux'

let SearchResult = ({ params, onSearch }) => {
    useEffect(() => {
        onSearch(params)
        console.log(params);
    }, [params, onSearch])

    return <Characters />
}

const mapStateToProps = ({ router }) => {
    const { key } = router.location.state
    return {
        params: key,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: name => {
            dispatch(findCharacterByName(name))
        },
    }
}

SearchResult = connect(mapStateToProps, mapDispatchToProps)(SearchResult)

export default SearchResult
