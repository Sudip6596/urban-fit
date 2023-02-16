import React from "react";

function Form() {
  return (
    <div className="form">
      <div className="form_container">
        <h2>Start Business Today</h2>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" placeholder="Enter your Name" />
        <br />
        <label htmlFor="mobile">Mobile</label>
        <br />
        <input type="text" id="mobile" placeholder="Enter your Mobile No" />
        <br />
        <label htmlFor="state">Select State</label>
        <br />
        <input type="text" id="state" placeholder="Select State" />
        <br />
        <label htmlFor="city">Select City</label>
        <br />
        <input type="text" id="city" placeholder="Select City" />
        <br />
        <div className="form_button">
          <button className="form_btn">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
