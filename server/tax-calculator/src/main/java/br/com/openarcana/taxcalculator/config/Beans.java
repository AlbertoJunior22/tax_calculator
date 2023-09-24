package br.com.openarcana.taxcalculator.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Beans {

    @Bean
    public ModelMapper defaultModelMapper() {
        return new ModelMapper();
    }

}
