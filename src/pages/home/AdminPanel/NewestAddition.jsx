import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { onSnapshot,collection } from "firebase/firestore";
import './NewAddition.css';


const NewestAdditions = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const ref = collection(db, "messages");

    
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(data);
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <div className="newest-additions">
      <h2 className="page-title">Newest Additions</h2>
      <ul className="addition-list">
        {messages.map((item) => (
          <div key={item.id} className="addition-card">
            <h3>{item.message}</h3>
         <img src={item.imageUrl} alt={item.message} className="addition-image" />
         <p>{item.bio}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewestAdditions;
