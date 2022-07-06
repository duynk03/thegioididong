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
public class Phone {
    @Id
    @SequenceGenerator(
            name = "phone_sequence",
            sequenceName = "phone_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "phone_sequence"
    )
    private Long id;
    private String screen;
    private String screenTechnology;
    private String resolution;
    private String wideScreen;
    private String brightness;
    private String touchScreen;
    private String frontCamera;
    private String rearCamera;
    private String chip;
    private String chipSpeed;
    private String chipGraphics;
    private String ram;
    private String rom;
    private String sim;
    private String pin;
    private String design;
    private String material;
    private String size;
    private String released;
    private Date createdAt;
    private Date modifiedAt;

//    @OneToOne(
//            mappedBy = "phone",
//            cascade = CascadeType.ALL
//    )
//    private Product product;


}
