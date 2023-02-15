package com.example.phonebookapi.controller;

import com.example.phonebookapi.dto.AddContactRequestDto;
import com.example.phonebookapi.dto.AddContactResponseDto;
import com.example.phonebookapi.model.ContactModel;
import com.example.phonebookapi.service.ContactService;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping("/addContact")
    public ResponseEntity<AddContactResponseDto> addContact(@RequestBody AddContactRequestDto dto){
        return service.addContact(dto);
    }

    @GetMapping("/contacts/{id}")
    public ResponseEntity<ContactModel> getContact(@PathVariable Integer id) {
        return service.getContact(id);
    }

    @GetMapping("/contacts")
    public ResponseEntity<List<ContactModel>> getContacts() {
        return service.getContacts();
    }

    @PutMapping("/contacts/{id}")
    public ResponseEntity<ContactModel> editContact(@PathVariable Integer id, @RequestBody ContactModel editedContact) {
        return service.editContact(id, editedContact);
    }

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Integer id) {
        service.deleteContact(id);
        return ResponseEntity.noContent().build();
    }


}
