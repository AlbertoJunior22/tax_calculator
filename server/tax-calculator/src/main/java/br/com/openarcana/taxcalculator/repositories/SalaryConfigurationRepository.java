package br.com.openarcana.taxcalculator.repositories;

import br.com.openarcana.taxcalculator.models.SalaryConfiguration;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface SalaryConfigurationRepository extends MongoRepository<SalaryConfiguration, String> {
}
