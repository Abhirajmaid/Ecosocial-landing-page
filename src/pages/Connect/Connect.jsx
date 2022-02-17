// import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./style.css";
import { NavLink } from "react-router-dom";
// import { db } from "../../Firebase";

export const Connect = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const [loader, setLoader] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoader(true);

  //     db.collection("contacts")
  //       .add({
  //         name: name,
  //         email: email,
  //         message: message,
  //       })
  //       .then(() => {
  //         setLoader(false);
  //         alert("Your message has been submitted👍");
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //         setLoader(false);
  //       });

  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   };
  const style = {
    color: "White",
    marginBottom: "30px",
    // margintop: "-20px",
  };

  return (
    <>
      <div className="big-container">
        <NavLink to="/">
          <FaTimes style={style} />
        </NavLink>
        <div className="connect-container">
          <form className="connect-form">
            <h1>Connect With Us</h1>
            <input className="input" placeholder="Name" />

            <input className="input" placeholder="Email" />

            <textarea className="textarea" placeholder="Message"></textarea>

            <button className="connect-btn" type="submit">
              Submit
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              rerum? Id atque reiciendis facilis esse, itaque velit. Animi,
              nulla? Ipsa.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
