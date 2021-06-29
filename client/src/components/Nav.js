import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
function Nav() {
	return (
		<AppBar position="static">
			<Tabs aria-label="simple tabs example">
				<Tab label="Saved" />
				<Tab label="Search" />
			</Tabs>
		</AppBar>
	);
}

export default Nav;
