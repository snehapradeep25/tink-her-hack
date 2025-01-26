import React, { useRef } from "react";
import { db } from "../../../firebase";
import { addDoc,collection } from "firebase/firestore";
import './Admin.css'
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const messageRef = useRef()
  const bioRef =useRef();
  const imageUrlRef = useRef();
  const ref = collection(db, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    const data = {
      message: messageRef.current.value,
      bio: bioRef.current.value,
      imageUrl: imageUrlRef.current.value,
    };

    try {
      await addDoc(ref, data);
      console.log("Message saved successfully");
      navigate("/NewestAdditions");
    } catch (e) {
      console.log("Error saving message: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter band name</label>
        <input type="text" ref={messageRef} />

        <label>Enter image URL</label>
        <input type="text" ref={imageUrlRef} />


        <label>Enter bio</label>
        <textarea ref={bioRef} />

     

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Admin;
