import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Saved from './Saved'
import API from "../utils/API";
class SavedPage extends React.Component {

	state = {
        savedBooks: []
      };

	  componentDidMount() {
		this.getBookList();
	  }

      getBookList() {
        API.getBooks()
          .then(res => { console.log(res.data); this.setState({ savedBooks: res.data })})
          .catch(err => console.log(err));
      };

	render(){
		return (
			<Container maxWidth="md">
				
					<Grid container direction="column" justify="center">
					<Grid container direction="column" justify="center">
                    {this.state.savedBooks === undefined ? <h1>No Books saved!</h1> : this.state.savedBooks.map((book, i) => {
                        return <Saved key={book._id} title={book.title} authors={book.authors} description={book.description}
                        image={book.image} link= {book.link}> </Saved>
                    })}
                        
                    </Grid>
					</Grid>
				
			</Container>
		);
	}
	
}

export default SavedPage;
