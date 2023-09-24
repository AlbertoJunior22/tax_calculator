package br.com.openarcana.taxcalculator.controllers;

import br.com.openarcana.taxcalculator.dtos.PersonDTO;
import br.com.openarcana.taxcalculator.services.PersonService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("person")
public class PersonController {

    private final PersonService service;

    @PostMapping
    public ResponseEntity<PersonDTO> createPerson(@RequestBody @Valid PersonDTO person) {
        return ResponseEntity.ok(service.createPerson(person));
    }

    @PutMapping
    public ResponseEntity<PersonDTO> updatePerson(@RequestBody @Valid PersonDTO person) {
        return ResponseEntity.ok(service.updatePerson(person));
    }

    @GetMapping("/{personId}")
    public ResponseEntity<PersonDTO> getPerson(@PathVariable String personId) {
        return ResponseEntity.ok(service.getPerson(personId));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{personId}")
    public void removePerson(@PathVariable String personId) {
        service.removePerson(personId);
    }

}
