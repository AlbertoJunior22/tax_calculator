package br.com.openarcana.taxcalculator.services;

import br.com.openarcana.taxcalculator.dtos.AuthDTO;
import br.com.openarcana.taxcalculator.dtos.PersonDetailsDTO;
import br.com.openarcana.taxcalculator.dtos.TokenDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;

    public TokenDTO login(AuthDTO authDTO) {
        final var springAuth = new UsernamePasswordAuthenticationToken(authDTO.getName(), authDTO.getPassword());
        final var authenticated = authenticationManager.authenticate(springAuth);

        return jwtService.getToken((PersonDetailsDTO) authenticated.getPrincipal());
    }
}
