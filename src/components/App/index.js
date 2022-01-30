import './index.css'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Home from 'pages/Home'
import Header from 'components/Header'
import SearchResult from 'pages/SearchResult'
import configureStore, { history } from 'redux/store/configureStore'

const store = configureStore()

const App = () => {
    return (
        <>
            <div className="app-container">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <>
                            <Header />
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/search">
                                <SearchResult />
                            </Route>
                        </>
                    </ConnectedRouter>
                </Provider>
            </div>
        </>
    )
}

export default App
