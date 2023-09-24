package br.com.openarcana.taxcalculator.models;

import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private UserGrantEnum grant;

}
