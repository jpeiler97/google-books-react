import React from 'react';
import { Grid, Container} from '@material-ui/core';
import Search from './Search'
import API from "../utils/API";
class SearchPage extends React.Component {

    state = {
        search: "",
        results: []
      };
      
    render() {
        return (
            <Container maxWidth="md">
                
                    <Grid container direction="column" justify="center">
                        <Search></Search>
                    </Grid>
                
            </Container>
        );
    }
	
}

export default SearchPage;
