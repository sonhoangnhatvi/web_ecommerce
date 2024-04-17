import React from "react";
import classes from "./CheckOutForm.module.css";

const CheckOutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p className={classes.billing_details_title}>BILLING DETAILS</p>
      <form onSubmit={handleSubmit} className={classes.checkoutform}>
        <label className={classes.input_title} htmlFor="full_name">
          FULL NAME:
        </label>
        <br />
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter Your Full Name Here!"
          className={classes.input_field}
        />
        <br />

        <label className={classes.input_title} htmlFor="full_name">
          EMAIL:
        </label>
        <br />
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter Your Email Here!"
          className={classes.input_field}
        />
        <br />

        <label className={classes.input_title} htmlFor="full_name">
          PHONE NUMBER:
        </label>
        <br />
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter Your Phone Number Here!"
          className={classes.input_field}
        />
        <br />

        <label className={classes.input_title} htmlFor="full_name">
          ADDRESS:
        </label>
        <br />
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter Your Address Here!"
          className={classes.input_field}
        />
        <br />

        <input className={classes.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CheckOutForm;
