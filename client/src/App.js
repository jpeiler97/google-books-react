import React from 'react';
import SearchPage from './components/SearchPage';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/styles.css';
function App() {
	return (
		<div>
			<Header />
			<Nav />
			<SearchPage/>
		</div>
	);
}

export default App;
