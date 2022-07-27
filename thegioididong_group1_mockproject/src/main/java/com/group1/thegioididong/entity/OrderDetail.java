package com.group1.thegioididong.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class OrderDetail {
    @Id
    @SequenceGenerator(
            name = "order_detail_sequence",
            sequenceName = "order_detail_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_detail_sequence"
    )
    private Long id;

    private int quantity;

    @JsonBackReference
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "order_id")
    private Orders order;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "product_id")
    private Product product;
}
