import React from 'react';
import { Card, Container } from '@material-ui/core';
import Saved from './components/Saved';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/styles.css';
function App() {
	return (
		<div>
			<Header />
			<Nav />
		</div>
	);
}

export default App;
