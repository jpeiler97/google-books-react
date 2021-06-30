import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes';
export default {
	getResults: function(query) {
		return axios.get(BASEURL + `?q=${query.trim()}`);
	}
};
