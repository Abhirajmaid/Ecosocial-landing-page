import React, { useState } from "react";
import { db } from "../../Firebase";
import "./style.css";

/**
 * ! Reloding after alert
 * ! Error is showing even after cursor is not on email
 * TODO Stop reloading after wrong email alert
 * TODO Write correct CTA text
 * TODO make regex for only correct @
 * TODO send thanks mail with firestore to the user (who gives email)
 * TODO remove error msg once cursor is removed form email input.
 *
 */

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  // eslint-disable-next-line no-useless-escape
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const checkEmail = (e) => {
    setEmail(e.target.value);

    // if (regex.test(email) === false) {
    //   setError("Please Enter Correct Email!😊");
    // } else {
    //   setError("");
    //   return true;
    // }
  };
  const click = (e) => {
    e.preventDefault();
    if (email !== "" && regex.test(email) !== false) {
      e.preventDefault();
      setLoader(true);
      db.collection("contacts")
        .add({
          email: email,
        })
        .then(() => {
          setLoader(false);
          alert("Your Mail has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
      // setEmail(email);
      setEmail("");
    } else {
      setError("Please Enter Correct Email!😊");
      alert("Please enter right Email 📩. Your mail is blank or wrong!");
    }
  };

  return (
    <>
      <form className="form" onSubmit={click}>
        <input placeholder="Email" value={email} onChange={checkEmail} />
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "#ffcc1d" }}
          className="join-btn"
        >
          JOIN US
        </button>
      </form>
      <p
        style={{
          color: "#ff3333",
          fontSize: "13px",
          marginTop: "10px",
        }}
      >
        {error}
      </p>
      <p className="CTA-text">
        *we are edifying the platform which will help all social activists and
        NGOs to build sustainable earth for future generations. Show us your
        interest in this noble motive by joining us.
      </p>
    </>
  );
};
