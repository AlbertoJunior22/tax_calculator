package br.com.openarcana.taxcalculator.dtos;

import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonDTO {

    private String id;
    @NotEmpty(message = "Name cannot be empty")
    private String name;
    @Email(message = "Invalid email")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @JsonIgnoreProperties(allowSetters = true)
    @NotEmpty(message = "Password cannot be empty")
    private String password;

    @JsonIgnoreProperties(allowGetters = true)
    private UserGrantEnum grant;

}
