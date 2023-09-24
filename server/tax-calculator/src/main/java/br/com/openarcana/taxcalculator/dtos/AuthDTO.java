package br.com.openarcana.taxcalculator.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AuthDTO {

    @NotEmpty
    private String name;
    @NotEmpty
    private String password;

}
