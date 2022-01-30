import './index.css'
import Home from 'pages/Home'
import Header from 'components/Header'
import SearchResult from 'pages/SearchResult'
import { Provider } from 'react-redux'
import configureStore, { history } from 'redux/store/configureStore'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
function App() {
    const store = configureStore()
    return (
        <>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <>
                        <Header />
                        <div className="app-container">
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/search">
                                <SearchResult />
                            </Route>
                        </div>
                    </>
                </ConnectedRouter>
            </Provider>
        </>
    )
}

export default App
