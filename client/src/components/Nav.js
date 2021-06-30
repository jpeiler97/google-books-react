import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
function Nav() {
	const location = useLocation();
	return (
		<AppBar position="static">
			<Tabs aria-label="tabs" >
				<Link to="/saved" className={location.pathname === '/saved'}>
				<Tab label="Saved"  /> 
				</Link>
				<Link to="/search" className={location.pathname === '/search'}>
				<Tab label="Search"/> 
				</Link>
			</Tabs>
		</AppBar>
	);
}

export default Nav;
