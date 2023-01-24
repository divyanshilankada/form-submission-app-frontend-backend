import { useState } from "react";
import './form.css';
import axios from "axios";



function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState("");

    
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [middleNameError, setMiddleNameError] = useState("");


    function handleClick()
    {
       // console.log(firstName,dob,lastName,email,phoneNumber,middleName,address,website);
        // const 
        

       if(firstName==="" || lastName==="" || email==="" || phoneNumber === "" || middleName=== "" || address==="" || website===""|| dob==="")
       {
            setError("*All fields are mandatory");
            return;
       }
       else
       {
            setError("");
            setEmailError("");
                setFirstNameError("");
                setLastNameError("");
                setMiddleNameError("");
                setPhoneNumberError("");
       }

       axios.post("http://localhost:5000/",{
            firstName:firstName, 
            lastName:lastName, 
            email:email,
            phoneNumber:phoneNumber,
            middleName:middleName,
            address:address,
            website:website,
            dob:dob
        }).then((data) => {
            console.log(data.data.errors)
            if(data.data.errors)
            {
                let errors = data.data.errors;
                console.log(errors);

                for(let i=0; i<errors.length; i++)
                {
                    if(errors[i].param === "firstName")
                    {
                        setFirstNameError("*"+errors[i].msg);
                    }
                    else if(errors[i].param === "lastName")
                    {
                        setLastNameError("*"+errors[i].msg);
                    }
                    else if(errors[i].param === "email")
                    {
                        setEmailError("*"+errors[i].msg);
                    }
                    else if(errors[i].param === "phoneNumber")
                    {
                        setPhoneNumberError("*"+errors[i].msg);
                    }
                    else if(errors[i].param === "middleName")
                    {
                        setMiddleNameError("*"+errors[i].msg);
                    }
                }
            }  
            else
            {
                alert("Success");
                window.location.reload();
            }

        }).catch((error) => console.log(error));


    }
  
    console.log(firstNameError,lastNameError)

    return (
    <div className="Form">
       <div className="form_container">
            <h1>Personal Information</h1>
            <div className="form_box">
              
                    <div>
                        {firstName!=="" ? <h4>First Name</h4> : null}
                        <input placeholder="John" value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)}></input>
                        {firstNameError !== "" ? <p>{firstNameError}</p> : null}
                    </div>
                    <div>
                        {lastName!=="" ? <h4>Last Name</h4> : null}
                        <input placeholder="Doe" value={lastName} type="text" onChange={(e) => setLastName(e.target.value)}></input>
                        {lastNameError !== "" ? <p>{lastNameError}</p> : null}
                    </div>

                    <div>
                        {middleName!=="" ? <h4>Middle Name</h4> : null}
                        <input placeholder="Middle Name" value={middleName} type="text" onChange={(e) => setMiddleName(e.target.value)}></input>
                        {middleNameError !== "" ? <p>{middleNameError}</p> : null}
                    </div>

                    <div>
                        {dob!=="" ? <h4>Date of Birth</h4> : null}
                        <input placeholder="Date of Birth" value={dob} type="date" onChange={(e) => setDob(e.target.value)}></input>
                    </div>

                    <div>
                        {phoneNumber!=="" ? <h4>Phone Number</h4> : null}
                        <input type="text" placeholder="98219XXXXX" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                        {phoneNumberError !== "" ? <p>{phoneNumberError}</p> : null}
                    </div>
                    <div>
                        {email!=="" ? <h4>E-mail</h4> : null}
                        <input placeholder="johndoe@gmail.com" value={email} type="text" onChange={(e) => setEmail(e.target.value)}></input>
                        {emailError !== "" ? <p>{emailError}</p> : null}
                    </div>
                   
                    
                    <div>
                        {address!=="" ? <h4>Address</h4> : null}
                        <input placeholder="Address" value={address} type="text" onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div>
                        {website!=="" ? <h4>Website</h4> : null}
                        <input placeholder="Website(If ant)" value={website} type="text" onChange={(e) => setWebsite(e.target.value)}></input>
                    </div>
            </div>
       </div>
       <div>
            {error!=="" ? <p>{error}</p> : null}
            <button onClick={handleClick}>Save</button>
       </div>
    </div>
  );
}

export default Form;
