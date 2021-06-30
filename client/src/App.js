import React from 'react';
import SavedPage from './components/SavedPage';
import SearchPage from './components/SearchPage'
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/styles.css';
function App() {
	return (
		<div>
			<Router>
			<Header />
			<Nav />

			<Route exact path="/" component={SavedPage} />
			<Route exact path="/saved" component={SavedPage} />
			<Route exact path="/search" component={SearchPage} />
			</Router>
			
		</div>
	);
}

export default App;
