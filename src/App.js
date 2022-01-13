import './App.css'
import { Provider } from 'react-redux'
import Characters from 'containers/Characters'
import store from 'redux/store'

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <Characters />
            </div>
        </Provider>
    )
}

export default App
