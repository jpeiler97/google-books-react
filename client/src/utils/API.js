import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes';
export default {
	getResults: function(query) {
		return axios.get(BASEURL + `?q=${query.trim()}`);
	},
	getBooks: function() {
		return axios.get("/api/books");
	  },
	  saveBook: function(bookData) {
		return axios.post("/api/books", bookData);
	  },
	  deleteBook: function(id) {
		return axios.delete("/api/books/" + id);
	  },
};
