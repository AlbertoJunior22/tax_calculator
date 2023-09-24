package br.com.openarcana.taxcalculator.services;

import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import br.com.openarcana.taxcalculator.dtos.PersonDTO;
import br.com.openarcana.taxcalculator.dtos.PersonDetailsDTO;
import br.com.openarcana.taxcalculator.exceptions.BusinessException;
import br.com.openarcana.taxcalculator.exceptions.NotFoundException;
import br.com.openarcana.taxcalculator.models.Person;
import br.com.openarcana.taxcalculator.repositories.PersonRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.Optional;

@Getter
@Setter
@RequiredArgsConstructor
@Service
public class PersonService implements UserDetailsService {

    private final PersonRepository repository;
    private final ModelMapper mapper;

    public PersonDTO createPerson(PersonDTO personDTO) {
        personDTO.setId(null);
        personDTO.setGrant(UserGrantEnum.USER);
        final var person = mapper.map(personDTO, Person.class);
        return mapper.map(createInternalPerson(person), PersonDTO.class);
    }

    public Person createInternalPerson(Person person) {
        repository.findByName(person.getName())
                .ifPresent(e -> {throw new BusinessException("User already exists");});

        person.setPassword(new BCryptPasswordEncoder().encode(person.getPassword()));
        return repository.save(person);
    }

    public PersonDTO updatePerson(PersonDTO personDTO) {
        if (ObjectUtils.isEmpty(personDTO))
            throw new BusinessException("Person cannot update with empty id");
        personDTO.setId(null);
        final var person = mapper.map(personDTO, Person.class);
        return mapper.map(repository.save(person), PersonDTO.class);
    }

    public PersonDTO getPerson(String personId) {
        final var person = repository.findById(personId)
                .orElseThrow(NotFoundException::new);
        return mapper.map(person, PersonDTO.class);
    }

    public void removePerson(String personId) {
        repository.findById(personId)
            .ifPresentOrElse(repository::delete, NotFoundException::new);
    }

    public Optional<PersonDTO> findPersonByGrant(UserGrantEnum grant) {
        return repository.findByGrant(grant).map(p -> mapper.map(p, PersonDTO.class));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByName(username)
                .map(p -> mapper.map(p, PersonDetailsDTO.class))
                .orElseThrow(() -> new NotFoundException("User not found"));
    }
}
