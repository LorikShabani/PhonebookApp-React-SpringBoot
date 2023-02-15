import React from "react";
import classes from './EditDataRow.module.css'



const EditDataRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <div className={classes.formContainer}>
      <h2>Edit Contact</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter the Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter Last Name"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter Address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Enter City"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          required="required"
          placeholder="Enter Country"
          value={editFormData.country}
          onChange={handleEditFormChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter the Email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Enter the Number"
          value={editFormData.number}
          onChange={handleEditFormChange}
        />
        <button type="submit">Save</button>
    </div>
  );
};

export default EditDataRow;

