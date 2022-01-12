import './App.css'
import { Provider } from 'react-redux'
import CardCharacterContainer from './containers/CardCharacterContainer'
import store from 'redux/store'

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <CardCharacterContainer />
            </div>
        </Provider>
    )
}

export default App
