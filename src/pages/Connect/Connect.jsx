import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./style.css";
import { NavLink } from "react-router-dom";
import { db } from "../../Firebase";

export const Connect = () => {
  // const [formValues, setFormValues] = useState({
  //   username: "",
  //   email: "",
  //   msg: "",
  // });
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userName !== "" && email !== "" && regex.test(email) !== false) {
      setLoader(true);

      db.collection("connection")
        .add({
          name: userName,
          email: email,
          message: msg,
        })
        .then(() => {
          setLoader(false);
          alert("Thanks For Your Support😊. It means a lot!💖");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setUserName("");
      setEmail("");
      setMsg("");
      setError("congratulations");
    } else if (userName === "" || email === "") {
      console.log("Seriously, You don't know anythig ? 😂😂");
      setError("Above fields are blank. 😶");
    } else if (regex.test(email) === false) {
      setError("Please enter correct Email!");
    }
  };

  const style = {
    color: "White",
    marginBottom: "30px",
  };

  return (
    <>
      <div className="big-container">
        <NavLink to="/">
          <FaTimes style={style} />
        </NavLink>
        <div className="connect-container">
          <form className="connect-form" onSubmit={handleSubmit}>
            <h1>Connect With Us</h1>
            <input
              type="text"
              className="input"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              type="text"
              className="textarea"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button
              className="connect-btn"
              type="submit"
              style={{ background: loader ? "#ccc" : "#ffcc1d" }}
            >
              Connect
            </button>
            <p className="error">{error}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              rerum? Id atque reiciendis facilis esse,
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
