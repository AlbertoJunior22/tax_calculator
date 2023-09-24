package br.com.openarcana.taxcalculator.exceptions;

public class NotFoundException extends RuntimeException {

    public NotFoundException() {
        super("Register not found");
    }

    public NotFoundException(String message) {
        super(message);
    }

}
