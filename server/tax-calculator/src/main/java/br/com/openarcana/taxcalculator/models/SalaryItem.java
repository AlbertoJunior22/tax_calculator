package br.com.openarcana.taxcalculator.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class SalaryItem {

    @Id
    private String id;
    private double grossWage;
    private double benefits;
    private double salaryWithoutBenefits;

}
