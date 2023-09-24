package br.com.openarcana.taxcalculator.repositories;

import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import br.com.openarcana.taxcalculator.dtos.PersonDetailsDTO;
import br.com.openarcana.taxcalculator.models.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PersonRepository extends MongoRepository<Person, String> {
    Optional<PersonDetailsDTO> findByName(String name);
    Optional<PersonDetailsDTO> findByGrant(UserGrantEnum grant);
}
