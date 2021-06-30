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

      
      componentDidMount() {
        this.search("harry potter");
      }
      search = query => {
        API.getResults(query)
          .then(res =>  this.setState({ results: res.data.items }))
          .catch(err => console.log(err));
      };

      handleFormSubmit = (event) => {
        event.preventDefault();
        this.search(this.state.search);
      }

      handleBookSave = (index) => {
  
          API.saveBook({
              title: this.state.results[index].volumeInfo.title,
            authors: this.state.results[index].volumeInfo.authors,
            description: this.state.results[index].volumeInfo.description,
            image: this.state.results[index].volumeInfo.imageLinks.smallThumbnail,
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
                    {(this.state.results === undefined || this.state.results.length === 0) ? <h1>No Books!</h1> : this.state.results.map((result, i) => {
                        return <Search key={result.volumeInfo.infoLink} handleBookSave = {() => this.handleBookSave(i)} title={result.volumeInfo.title} authors={result.volumeInfo.authors} description={result.volumeInfo.description}
                        image={result.volumeInfo.imageLinks === undefined ? 'http://lgimages.s3.amazonaws.com/nc-sm.gif' : result.volumeInfo.imageLinks.smallThumbnail } link= {result.volumeInfo.infoLink}></Search>
                    })}
                        
                    </Grid>
                
            </Container>
        );
    }
	
}

export default SearchPage;
