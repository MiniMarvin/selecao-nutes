/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 *
 * @author caiogomes
 */
@Entity
@Table(name="users")
public class NutesUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="username", unique=true)
    private String username;
    
    @NotBlank
    private String name;
    
    @Column(name="father_name")
    private String fatherName;
    
    @Column(name="mother_name")
    private String motherName;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="birth_date")
    private Date birthDate;
    
    public Long getId() {
        return this.id;
    }
    public String getUsername() {
        return this.username;
    }
    public String getName() {
        return this.name;
    }
    public String getFatherName() {
        return this.fatherName;
    }
    public String getMotherName() {
        return this.motherName;
    }
    public Date getBirthDate() {
        return this.birthDate;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }
    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }
    public void setBirthDate(Date birthDate){
        this.birthDate = birthDate;
    }
}
