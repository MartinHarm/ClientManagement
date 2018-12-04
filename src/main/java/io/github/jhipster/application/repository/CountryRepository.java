package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
