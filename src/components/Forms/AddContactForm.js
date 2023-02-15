import React, { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./AddContactForm.module.css";

const AddContactForm = (props) => {
  const [extraEmailInputs, setExtraEmailInputs] = useState(false);
  const [extraNumberInputs, setExtraNumberInputs] = useState(false);
  const [addFormData, setAddFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    email: "",
    number: "",
  });

  const formDataHandler = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      lastName: addFormData.lastName,
      address: addFormData.address,
      city: addFormData.city,
      country: addFormData.country,
      email: addFormData.email,
      number: addFormData.number,
    };

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": addFormData.name,
  "lastName": addFormData.lastName,
  "address": addFormData.address,
  "city": addFormData.city,
  "country": addFormData.country,
  "email": addFormData.email,
  "number": addFormData.number,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/addContact", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


    props.onAddContact(newContact);
  };

  const showExtraEmailInputsHandler = () => {
    setExtraEmailInputs(true);
  };

  const showExtraNumberInputsHandler = () => {
    setExtraNumberInputs(true);
  };

  return (
    <div className={classes.formContainer}>
      <h2>Register New Contact</h2>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter the Name"
          onChange={formDataHandler}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter Last Name"
          onChange={formDataHandler}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter Address"
          onChange={formDataHandler}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Enter City"
          onChange={formDataHandler}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          required="required"
          placeholder="Enter Country"
          onChange={formDataHandler}
        />
        <div className={classes["input-container"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter the Email"
            onChange={formDataHandler}
          />
          {!extraEmailInputs && (
            <button type="button" onClick={showExtraEmailInputsHandler}>
              Add
            </button>
          )}
          {extraEmailInputs && (
            <div className={classes.extraInputs}>
              <input type="email" placeholder="Enter the Email" />
              <input type="email" placeholder="Enter the Email" />
              <button type="button">Add</button>
            </div>
          )}
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="number"
            required="required"
            placeholder="Enter the Number"
            onChange={formDataHandler}
          />
          {!extraNumberInputs && (
            <button type="button" onClick={showExtraNumberInputsHandler}>
              Add
            </button>
          )}
          {extraNumberInputs && (
            <div className={classes.extraInputs}>
              <input type="text" placeholder="Enter the Number" />
              <input type="text" placeholder="Enter the Number" />
              <input type="text" placeholder="Enter the Number" />
              <button type="button">Add</button>
            </div>
          )}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddContactForm;
