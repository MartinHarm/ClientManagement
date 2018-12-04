package io.github.jhipster.application.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "jhi_country")
public class Country implements Serializable {

    private static final long serialVersionUID = 1L;

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    @NotNull
    @Id
    @Size(max = 2)
    @Column(name = "country_code", length = 2)
    private String countryCode;

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    @Size(max = 50)
    @Column(name = "country_name", length = 50)
    private String countryName;


    @Override
    public String toString() {
        return "Country{" +
            "code='" + countryCode + '\'' +
            ", name='" + countryName + '\'' +
            "}";
    }
}
