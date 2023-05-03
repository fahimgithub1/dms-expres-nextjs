import React from "react";
import classes from "./orderTraking.module.css";

export default function UserConfirmation(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onTtoggle()
  }

  return (
    <div className="HerosSection">
      <div className="container">
        <div className="py-3 py-md-3 py-lg-5 text-center">
          <div className={classes.trackingForm}>
            <h4 className="mb-3 mb-md-4 text-center">Order Traking</h4>
            <form onSubmit={submitHandler}>
              <label>Mobile:</label>
              <input placeholder="Enter Your mobile" />

              <label>ID:</label>
              <input placeholder="Enter Order ID" />

              <button type="sbmit">View Traking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
