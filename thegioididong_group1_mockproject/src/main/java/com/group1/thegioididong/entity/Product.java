package com.group1.thegioididong.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private Long id;
    private String name;
    private String category;
    private double price;
    private String manufacturer;
    private String os;
    private String color;
    @Lob
    private String description;

    @OneToMany(
            mappedBy = "product",
            cascade = CascadeType.ALL
    )
    @JsonManagedReference
    @ToString.Exclude
    private List<Image> images;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "phone_id",
            referencedColumnName = "id",
            unique = true
    )
    private Phone phone;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "tablet_id",
            referencedColumnName = "id",
            unique = true
    )
    private Tablet tablet;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "laptop_id",
            referencedColumnName = "id",
            unique = true
    )
    private Laptop laptop;

    @OneToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "smartwatch_id",
            referencedColumnName = "id",
            unique = true
    )
//    @ToString.Exclude
    private Smartwatch smartwatch;
    private String state;
    private int saleOff;
    private Date created_at;
    private Date modified_at;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Product product = (Product) o;
        return id != null && Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
