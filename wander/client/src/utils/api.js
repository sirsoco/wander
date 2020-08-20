// // Routes we will reference in pages
// import axios from "axios";

// export default {

// // gets all users
// getAllUsers: () => 
//     axios.get("/api/user/profile/")
//     .then(result => result.data),

// // get specific user based on uid
// getUser: () => 
//     axios.get(`/api/user/profile/${uid}`)
//     .then(result => result.data),

// // update a profile based on uid
// updateProfile: () => 
//     axios.get(`/api/user/profile/${uid}`)
//     .then(result => result.data)


// For continuity -- would be great to change app.js to match this format
// post uid to database 
// saveLogin: function() {
//     return axios.post("/api/user")
// }




// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };