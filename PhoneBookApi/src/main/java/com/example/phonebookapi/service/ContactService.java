package com.example.phonebookapi.service;

import com.example.phonebookapi.dto.AddContactRequestDto;
import com.example.phonebookapi.dto.AddContactResponseDto;
import com.example.phonebookapi.model.ContactModel;
import com.example.phonebookapi.repository.ContactRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }


    public ResponseEntity<AddContactResponseDto> addContact(AddContactRequestDto dto) {

        ContactModel newContact = new ContactModel();
        newContact.setName(dto.getName());
        newContact.setLastName(dto.getLastName());
        newContact.setAddress(dto.getAddress());
        newContact.setCity(dto.getCity());
        newContact.setCountry(dto.getCountry());
        newContact.setEmail(dto.getEmail());
        newContact.setNumber(dto.getNumber());

        repository.save(newContact);
        AddContactResponseDto responseDto = new AddContactResponseDto();
        return ResponseEntity.ok(responseDto);

    }

    public ResponseEntity<ContactModel> getContact(Integer id) {
        ContactModel contact = repository.findById(id).orElse(null);
        if (contact == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(contact);
    }

    public ResponseEntity<List<ContactModel>> getContacts() {
        List<ContactModel> contacts = repository.findAll();
        return ResponseEntity.ok(contacts);
    }

    public ResponseEntity<ContactModel> editContact(Integer id, ContactModel editedContact) {
        ContactModel contact = repository.findById(id).orElse(null);

        if (contact == null) {
            return ResponseEntity.notFound().build();
        }

        contact.setName(editedContact.getName());
        contact.setLastName(editedContact.getLastName());
        contact.setAddress(editedContact.getAddress());
        contact.setCity(editedContact.getCity());
        contact.setCountry(editedContact.getCountry());
        contact.setEmail(editedContact.getEmail());
        contact.setNumber(editedContact.getNumber());

        repository.save(contact);

        return ResponseEntity.ok(contact);
    }

    public ResponseEntity<Void> deleteContact(Integer id) {
        ContactModel contact = repository.findById(id).orElse(null);
        repository.delete(contact);
        return ResponseEntity.noContent().build();
    }


}
