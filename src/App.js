import './App.css'
import { Provider } from 'react-redux'
import Home from 'pages/Home'
import Header from 'components/Header'
import SearchResult from 'pages/SearchResult'
import store from 'redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/search/:keyword"
                            element={<SearchResult />}
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    )
}

export default App
