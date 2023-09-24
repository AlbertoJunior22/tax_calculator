package br.com.openarcana.taxcalculator.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class SalaryConfiguration {

    private String id;
    private String personId;
    private List<SalaryItem> salaries;

}
