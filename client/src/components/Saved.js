import React from 'react';
import { Button, Grid, Container, Card, Typography, Box, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		margin: 10,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		width: 100,
		padding: '0 30px',
		float: 'right'
	},
	card: {
		margin: 10
	},
	infoBox:{
		width: 500
	}
});
function Saved({title, authors, description, image, link}) {
	const classes = useStyles();

	return (
		
				<Card className={classes.card}>
						<Grid container direction="row" justify="space-between">
						
							
							<Box className= {classes.infoBox}>
							<CardContent>{title}</CardContent>
							<CardContent>by {authors}</CardContent>
							<CardContent>{description}</CardContent>
							<img src={image}></img>
							<a href={link}></a>
							</Box>
							
							<Box>
							<Button className={classes.button}>Delete</Button> 
							<Button className={classes.button}>View</Button>
							</Box>
						
						</Grid>
						
					</Card> 
	);
}

export default Saved;

