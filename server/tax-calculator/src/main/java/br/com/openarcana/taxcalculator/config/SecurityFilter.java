package br.com.openarcana.taxcalculator.config;

import br.com.openarcana.taxcalculator.services.JWTService;
import br.com.openarcana.taxcalculator.services.PersonService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter {

    private final JWTService jwtService;
    private final PersonService personService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = recoveryToken(request);

        if (!ObjectUtils.isEmpty(token)) {
            var userName = jwtService.validate(token);
            UserDetails userDetails = personService.loadUserByUsername(userName);
            var authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

    private String recoveryToken(HttpServletRequest request) {
        final var authorization = request.getHeader("Authorization");
        if (ObjectUtils.isEmpty(authorization)) return null;
        return authorization.replace("Bearer ", "");
    }
}
