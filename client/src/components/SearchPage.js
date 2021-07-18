import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Search from './Search'
import SearchForm from './SearchForm'
import API from "../utils/API";
class SearchPage extends React.Component {

    state = {
        search: "",
        results: []
      };

      //Get search results based on user query from the Google Books API
      search = query => {
        API.getResults(query)
          .then(res =>  this.setState({ results: res.data.items }))
          .catch(err => console.log(err));
      };

      handleFormSubmit = (event) => {
        event.preventDefault();
        this.search(this.state.search);
      }

      //Save specific book given its index in the search results
      handleBookSave = (index) => {
  
          API.saveBook({
              title: this.state.results[index].volumeInfo.title,
            authors: this.state.results[index].volumeInfo.authors,
            description: this.state.results[index].volumeInfo.description,
            image: this.state.results[index].volumeInfo.imageLinks ? this.state.results[index].volumeInfo.imageLinks.smallThumbnail : 'http://lgimages.s3.amazonaws.com/nc-sm.gif',
            link: this.state.results[index].volumeInfo.infoLink
        
        }).then().catch(err => console.log(err))
      }

      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    render() {
        return (
            <Container maxWidth="md">
                
                    <SearchForm handleFormSubmit={this.handleFormSubmit} search={this.state.search}  handleInputChange={this.handleInputChange}></SearchForm>
                    <Grid container direction="column" justify="center">
                    {/* If results come back as empty or undefined, display "No Results" */}
                    {(this.state.results === undefined || this.state.results.length === 0) ? <h1 id="no-results">No Results</h1> 
                    // Else, map out each result in state.results as a Search component.
                    //If the image in results is undefined, image will be set to a placeholder image to avoid errors. 
                    : this.state.results.map((result, i) => {
                        return <Search key={result.volumeInfo.infoLink} handleBookSave = {() => this.handleBookSave(i)} title={result.volumeInfo.title} authors={result.volumeInfo.authors} description={result.volumeInfo.description}
                        image={result.volumeInfo.imageLinks === undefined ? 'http://lgimages.s3.amazonaws.com/nc-sm.gif' : result.volumeInfo.imageLinks.smallThumbnail } link= {result.volumeInfo.infoLink}></Search>
                    })}
                        
                    </Grid>
                
            </Container>
        );
    }
	
}

export default SearchPage;
