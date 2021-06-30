import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Search from './Search'
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
          .then(res => { console.log(res.data.items[0].volumeInfo); this.setState({ results: res.data.items })})
          .catch(err => console.log(err));
      };

    render() {
        return (
            <Container maxWidth="md">
                
                    <Grid container direction="column" justify="center">
                    {this.state.results.map(result => {
                        return <Search title={result.volumeInfo.title} ></Search>
                    })}
                        
                    </Grid>
                
            </Container>
        );
    }
	
}

export default SearchPage;
