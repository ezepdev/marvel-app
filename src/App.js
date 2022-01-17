import './App.css'
import { Provider } from 'react-redux'
import Characters from 'containers/Characters'
import ShowMoreCharacters from 'components/ShowMoreCharacters'
import Header from 'components/Header'
import store from 'redux/store'

function App() {
    return (
        <Provider store={store}>
            <Header />
            <div className="app-container">
                <Characters />
                <ShowMoreCharacters />
            </div>
        </Provider>
    )
}

export default App
