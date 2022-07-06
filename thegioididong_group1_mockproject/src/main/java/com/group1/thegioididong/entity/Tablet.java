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
public class Tablet {
    @Id
    @SequenceGenerator(
            name = "tablet_sequence",
            sequenceName = "tablet_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "tablet_sequence"
    )
    private Long id;
    private String screen;
    private String screenTechnology;
    private String resolution;
    private String wideScreen;
    private String frontCamera;
    private String rearCamera;
    private String chip;
    private String chipSpeed;
    private String chipGraphics;
    private String ram;
    private String rom;
    private String sim;
    private String pin;
    private String material;
    private String size;
    private String released;
    private Date createdAt;
    private Date modifiedAt;
    
}
