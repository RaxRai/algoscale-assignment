import axios from 'axios';
import React, { useState } from 'react';
import "./css/contact.css"

function Contact(props) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const ValidateEmail=(mail)=>{
        let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(emailformat)) {
            alert("Nice Email!")
              return true;
        };
        alert("That's not an email?!")
        return (false);
    };

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit =()=>{
        if(!ValidateEmail(email)){
            console.log("not valid");
            return;
        }
        let newFormdata = {
            firstname,
            lastname,
            email,
            message,
            date : Date.now()
        }
        submitData(newFormdata);
    }
    const  submitData = async (newData)=>{
        axios.post(`http://localhost:4000/api/v1/contact`,newData)
        .then(res => {
            props.history.push("/analytics");
        })

     };

  return (
    <div className="contact-container">
        <div className="form">
            <h2>Contact Us Form</h2>
            <span>First Name</span>
            <input type="text" onChange={(e)=> setFirstname(e.target.value)} autoComplete="none"/>
            <span>Last Name</span>
            <input type="text" onChange={(e)=> setLastname(e.target.value)} autoComplete="none" />
            <span>Email</span>
            <input type="email" onChange={handleEmail} autoComplete="none" />
            <span>Message</span>
            <textarea  type="text" onChange={(e)=> setMessage(e.target.value)} className="message"/>
            <button name="SUBMIT" onClick={handleSubmit}>SUBMIT</button>
        </div>
    </div>
  );
}

export default Contact;
