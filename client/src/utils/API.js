import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books';
const key = 'AIzaSyBODAT_L2eSPvloTPWYpRvaQcCRUSi50f4';

export default {
	getResults: function(query) {
		return axios.get(BASEURL + `?q=${query}&key=${key}`);
	}
};
