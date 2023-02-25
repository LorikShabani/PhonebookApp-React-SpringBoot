import React, { useEffect, useState } from "react";
import Table from "./components/Layout/Table";
import AddContactForm from "./components/Forms/AddContactForm";
import classes from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [formIsShown, setFormIsShown] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/contacts", requestOptions)
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.log("error", error));
  }, []);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
    setFormIsShown(false);
  };

  const editContactHandler = (contact, editContactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = contact;
    setContacts(newContacts);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const deleteContactHandler = (contactId) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8080/contacts/${contactId}`, requestOptions)
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className={classes.header}>
        <h1>PhoneBook</h1>
      </div>

      {!formIsShown && (
        <Table
          contacts={contacts}
          onClick={showFormHandler}
          onEditContact={editContactHandler}
          onDeleteContact={deleteContactHandler}
        />
      )}
      {formIsShown && <AddContactForm onAddContact={addContactHandler} />}
    </>
  );
};

export default App;
