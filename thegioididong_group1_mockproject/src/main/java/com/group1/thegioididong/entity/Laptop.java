package com.group1.thegioididong.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Laptop {
    @Id
    @SequenceGenerator(
            name = "laptop_sequence",
            sequenceName = "laptop_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "laptop_sequence"
    )
    private Long id;
    private String cpu;
    private String core;
    private String thread;
    private String cpuSpeed;
    private String cpuMaxSpeed;
    private String ram;
    private String ramType;
    private String ramSpeed;
    private String ramUpdate;
    private String rom;
    private String screen;
    private String graphicCard;
    private String connector;
    private String especially;
    private String design;
    private String size;
    private String released;
    private Date createdAt;
    private Date modifiedAt;

//    @OneToOne(
//            mappedBy = "laptop",
//            cascade = CascadeType.ALL
//    )
//    private Product product;
}
