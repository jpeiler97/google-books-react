import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Saved from './Saved'

function SavedPage() {

	return (
		<Container maxWidth="md">
			
				<Grid container direction="column" justify="center">
					<Saved></Saved>
				</Grid>
			
		</Container>
	);
}

export default SavedPage;
