const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
// Load env variables
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 4000;
// mongoDb setup
mongoose.connect('mongodb://localhost/assignments')
    .then(()=> console.log("connection to db successfull"))
    .catch((err)=> console.log(err));

//pipeline and middleware
app.use(express.json());
app.use(cors());
//mongoDb Schema
const contactSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    message : String,
    date : Date
});
const Contact = mongoose.model('Contact',contactSchema);

app.get('/api/v1/contact', (req, res) => {
    Contact.find().then((contact) => res.send(contact));
   });

app.post('/api/v1/contact', (req, res)=>{
    const contact = new Contact(req.body);
    contact.save();
    res.send(contact);
});

app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server running at port ${PORT}`)
);