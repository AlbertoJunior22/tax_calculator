package br.com.openarcana.taxcalculator.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RolesEnum {

    ADMIN("admin"),
    TAX_CALCULATION_CONFIG("tax_calculation_config");

    private final String value;

}
