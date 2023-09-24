package br.com.openarcana.taxcalculator;

import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import br.com.openarcana.taxcalculator.dtos.PersonDTO;
import br.com.openarcana.taxcalculator.models.Person;
import br.com.openarcana.taxcalculator.services.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RequiredArgsConstructor
@SpringBootApplication
public class TaxCalculatorApplication implements CommandLineRunner {

	private final PersonService personService;

	public static void main(String[] args) {
		SpringApplication.run(TaxCalculatorApplication.class, args);
	}

	@Override
	public void run(String... args) {
		final var person = personService.findPersonByGrant(UserGrantEnum.ADMIN);
		if (person.isEmpty())
			personService.createInternalPerson(
				Person.builder()
					.name("admin")
					.email("admin@email.com")
					.password(new BCryptPasswordEncoder().encode("admin"))
					.grant(UserGrantEnum.ADMIN)
					.build()
			);
	}
}
