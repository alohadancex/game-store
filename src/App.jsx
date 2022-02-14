import React from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/header'
import { HomePage } from './pages/home-page'
import { store } from './redux'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Switch>
						<Route path='/'>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}

export default App
