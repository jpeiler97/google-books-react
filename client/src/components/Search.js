import React from 'react';
import { Grid, Card, Box, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		margin: 10
	},
	infoBox:{
		width: 500
	}
});
function Search({title, authors, description, image, link}) {
	const classes = useStyles();

	return (

					<Card className={classes.card}>
						<Grid container direction="row" justify="space-between">
						
							
							<Box className= {classes.infoBox}>
							<CardContent>{title}</CardContent>
                            {/* Maps out authors array, if not at the end of the array it will return a comma after the author's name  */}
							<CardContent>by {authors === undefined ? 'Author Not Provided' : authors.map((author, i) => <span key={i}>{author}{i !== authors.length-1 ? ', ' : ''}</span>) }</CardContent>
							<CardContent>{description}</CardContent>
							<img src={image}></img>
							<a href={link}>Link</a>
							</Box>
						
						</Grid>
						
					</Card>
	);
}

export default Search;