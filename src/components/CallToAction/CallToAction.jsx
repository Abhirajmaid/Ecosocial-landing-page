import React from "react";
import "./style.css";

export const CallToAction = () => {
  return (
    <>
      {/* onSubmit={this.handleSubmit} */}
      <form className="form">
        {/* <label>Email</label> */}
        <input placeholder="Email" />
        <button className="join-btn">Join Us</button>
        {/* <label>
          <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          />
          </label>
        <input type="submit" value="Submit" /> */}
      </form>
      <p className="CTA-text">
        *Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        placeat labore, delectus debitis dolorem deleniti explicabo
      </p>
    </>
  );
};
