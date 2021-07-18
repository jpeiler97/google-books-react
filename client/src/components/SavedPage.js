import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Saved from './Saved'
import API from "../utils/API";
class SavedPage extends React.Component {

	state = {
        savedBooks: []
      };
	  //Calls getBookList upon component mount
	  componentDidMount() {
		this.getBookList();
	  }

	  //Gets all saved books from database and sets savedBooks array in state to res.data
      getBookList() {
        API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err => console.log(err));
      };

	  //Deletes saved book based on ID
	  deleteBook(id){
		API.deleteBook(id)
		.then(res => this.getBookList())
		.catch(err => console.log(err));
	  }
	render(){
		return (
			<Container maxWidth="md">
				<h1 id= "saved-title">Your Saved Books</h1>
					<Grid container direction="column" justify="center">
					<Grid container direction="column" justify="center">
					{/* If savedBooks is empty or hasn't had any books added, display "No books saved" text */}
                    {this.state.savedBooks === undefined || this.state.savedBooks.length === 0 ? <h1 id="no-saved">No books saved! Save a book by finding a good one in the search tab.</h1>
					// Else, map out savedBooks and return each book as a Saved component
					 : this.state.savedBooks.map((book, i) => {
                        return <Saved key={book._id} title={book.title} authors={book.authors} description={book.description}
                        image={book.image} link= {book.link} handleBookDelete={() => this.deleteBook(book._id)}> </Saved>
                    })}
                        
                    </Grid>
					</Grid>
				
			</Container>
		);
	}
	
}

export default SavedPage;
