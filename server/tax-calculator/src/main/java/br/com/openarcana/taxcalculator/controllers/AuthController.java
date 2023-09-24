package br.com.openarcana.taxcalculator.controllers;

import br.com.openarcana.taxcalculator.dtos.AuthDTO;
import br.com.openarcana.taxcalculator.dtos.TokenDTO;
import br.com.openarcana.taxcalculator.services.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("auth")
public class AuthController {

    private final AuthService service;

    @PostMapping
    public ResponseEntity<TokenDTO> login(@RequestBody @Valid AuthDTO authDTO) {
        return ResponseEntity.ok(service.login(authDTO));
    }

}
