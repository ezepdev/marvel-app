import './App.css'
import { Provider } from 'react-redux'
import Characters from 'containers/Characters'
import ShowMoreCharacters from 'components/ShowMoreCharacters'
import Header from 'components/Header'
import store from 'redux/store'

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <Header />
                <Characters />
                <ShowMoreCharacters />
            </div>
        </Provider>
    )
}

export default App
