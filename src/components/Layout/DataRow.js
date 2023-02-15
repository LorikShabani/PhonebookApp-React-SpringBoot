import React from "react";
import classes from "./DataRow.module.css";
const DataRow = ({ contact, handleEditClick, onDeleteContact }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.address}</td>
      <td>{contact.city}</td>
      <td>{contact.country}</td>
      <td>{contact.email}</td>
      <td>{contact.number}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
      <td className={classes.delete}>
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DataRow;
