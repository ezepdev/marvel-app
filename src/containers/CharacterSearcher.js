import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import Searcher from 'components/Searcher'

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: name => {
            if (name !== '') dispatch(push(`/search`, { key: `${name}` }))
        },
    }
}
const CharacterSearcher = connect(null, mapDispatchToProps)(Searcher)

export default CharacterSearcher
