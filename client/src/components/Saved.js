import React from 'react';
import { Button, Grid, Card, Box, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	buttonRed: {
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
	buttonBlue: {
		background: 'linear-gradient(45deg, #439EB9 30%, #3089A4 90%)',
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
	},
	title:{
		fontSize: 30
	},
	image: {
		margin: 10
	}
});
function Saved({title, authors, description, image, link, handleBookDelete}) {
	const classes = useStyles();

	return (
		
				<Card className={classes.card}>
						<Grid container direction="row" justify="space-between">
						
							
							<Box className= {classes.infoBox}>
							<CardContent className={classes.title}>{title}</CardContent>
							<CardContent>by {authors.length === 0 ? 'Author Not Provided' : authors.map((author, i) => <span key={i}>{author}{i !== authors.length-1 ? ', ' : ''}</span>) }</CardContent>
							<CardContent>{description}</CardContent>
							
	
							</Box>
							
							<Box>
							<Button className={classes.buttonRed} onClick={handleBookDelete}>Delete</Button> 
							<Button className={classes.buttonBlue} href={link}>View Details</Button>
							<img src={image} alt={title} className={classes.image}></img>
							</Box>
						
						</Grid>
						
					</Card> 
	);
}

export default Saved;

