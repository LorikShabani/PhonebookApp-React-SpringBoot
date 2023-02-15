package com.example.phonebookapi.repository;

import com.example.phonebookapi.model.ContactModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<ContactModel, Integer> {

}
