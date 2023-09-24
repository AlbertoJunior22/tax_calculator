package br.com.openarcana.taxcalculator.services;

import br.com.openarcana.taxcalculator.dtos.PersonDetailsDTO;
import br.com.openarcana.taxcalculator.dtos.TokenDTO;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;


@Service
public class JWTService {

    private static final String APPLICATION = "openarcana";

    @Value("${security.secret}")
    private String secret;

    @Value("${security.expiration-in-hours}")
    private long expirationInHours;

    private Algorithm getAlgorithm() {
        return Algorithm.HMAC256(secret);
    }

    public TokenDTO getToken(PersonDetailsDTO person) {
        final var expiration = LocalDateTime.now().plusHours(expirationInHours).atZone(ZoneOffset.systemDefault()).toInstant();

        String token = JWT.create()
                .withIssuer(APPLICATION)
                .withSubject(person.getName())
                .withExpiresAt(expiration)
                .sign(getAlgorithm());

        return TokenDTO.builder()
                .token(token)
                .expiration(expiration.toEpochMilli())
                .build();
    }

    public String validate(String token) {
        return JWT.require(getAlgorithm())
                .withIssuer(APPLICATION)
                .build()
                .verify(token)
                .getSubject();

    }
}
