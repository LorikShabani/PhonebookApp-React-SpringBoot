import React, { useState } from "react";
import classes from "./Table.module.css";
import EditContact from "../Forms/EditDataRow";
import DataRow from "./DataRow";

const Table = (props) => {
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    email: "",
    number: "",
  });

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      lastName: editFormData.lastName,
      address: editFormData.address,
      city: editFormData.city,
      country: editFormData.country,
      email: editFormData.email,
      number: editFormData.number,
    };

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": editFormData.name,
  "lastName": editFormData.lastName,
  "address": editFormData.address,
  "city": editFormData.city,
  "country": editFormData.country,
  "email": editFormData.email,
  "number": editFormData.number,
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:8080/contacts/${editContactId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    props.onEditContact(editedContact, editContactId);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      lastName: contact.lastName,
      address: contact.address,
      city: contact.city,
      country: contact.country,
      email: contact.email,
      number: contact.number,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  return (
    <>
      {editContactId === null && (
        <div className={classes.header}>
          <h2>Contacts</h2>
          <button onClick={props.onClick}>Add Contact</button>
        </div>
      )}
      <div className={classes.tableContainer}>
        <form onSubmit={handleEditFormSubmit}>
          {editContactId === null && (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {props.contacts.map((contact) => (
                  <DataRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    onDeleteContact={props.onDeleteContact}
                  />
                ))}
              </tbody>
            </table>
          )}

          {editContactId != null && (
            <EditContact
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Table;
