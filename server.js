const app = require("./app");
const mongoose = require('mongoose');
const DB_HOST = 'mongodb+srv://Dmytro:ghbctl100@cluster0.uuninah.mongodb.net/contacts_reader?retryWrites=true&w=majority'
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

mongoose.connect(DB_HOST)
.then(()=> console.log("Database connect success"))
.catch(error => console.log(error.message))