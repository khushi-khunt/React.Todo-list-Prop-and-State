import React, { useEffect, useState } from "react";
import './style.css'

const Adduser = ({ addUser, single, editid, updateUser }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setName(single.name);
        setPhone(single.phone);
    }, [single]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !phone){
            alert("Your record is blankk")
            return false;
        }
        let obj = {
            id: Date.now(),
            name: name,
            phone: phone,
        };
        if (editid) {
            updateUser(obj);
        } else {
            addUser(obj);
        }
        setName("");
        setPhone("");
        alert("Record submitted sucessfully"); // Display alert message
    };

    return (
        <div align="center">
            <h1>Todo app</h1><br></br>
            <form onSubmit={handleSubmit}>
                Name:&nbsp; &nbsp;
                <input
                    type="text" placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""}
                /><br></br>
                <br></br>
                Contact:&nbsp;&nbsp;
                <input
                    type="text" placeholder="Enter Contact-number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone || ""}
                /><br></br><br></br>
                <input type="submit" className="submit-button" />
            </form>
        </div>
    );
};

export default Adduser;


