package com.group1.thegioididong.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Smartwatch {
    @Id
    @SequenceGenerator(
            name = "smartwatch_sequence",
            sequenceName = "smartwatch_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "smartwatch_sequence"
    )
    private Long id;
    private String screen;
    private String resolution;
    private String materialFrame;
    private String materialTrap;
    private String size;
    private String pinTime;
    private String charge;
    private String pin;
    private String materialSurface;
    private String feature;
    private String released;
    private Date createdAt;
    private Date modifiedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Smartwatch that = (Smartwatch) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
