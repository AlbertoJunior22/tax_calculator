package br.com.openarcana.taxcalculator.dtos;

import br.com.openarcana.taxcalculator.constants.RolesEnum;
import br.com.openarcana.taxcalculator.constants.UserGrantEnum;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
public class PersonDetailsDTO implements UserDetails {

    private String id;
    private String name;
    private String email;
    private String password;
    private UserGrantEnum grant;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        final var roles = grant == UserGrantEnum.ADMIN?
                List.of(RolesEnum.ADMIN.getValue(), RolesEnum.TAX_CALCULATION_CONFIG.getValue()):
                List.of(RolesEnum.TAX_CALCULATION_CONFIG.getValue());
        return roles.stream().map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
