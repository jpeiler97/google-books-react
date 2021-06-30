import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	tabOpen: {
		backgroundColor: 'white',
		color: 'black'
	},
	tabClosed: {
		backgroundColor: '#3f51b5',
		color: 'white'
	}
});
function Nav() {
	const location = useLocation();
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Tabs aria-label="tabs" >
				<Link to="/saved" className={location.pathname === '/saved' ? `${classes.tabOpen}` : `${classes.tabClosed}` }>
				<Tab label="Saved"  /> 
				</Link>
				<Link to="/search" className={location.pathname === '/search' ? `${classes.tabOpen}` : `${classes.tabClosed}`}>
				<Tab label="Search"/> 
				</Link>
			</Tabs>
		</AppBar>
	);
}

export default Nav;
