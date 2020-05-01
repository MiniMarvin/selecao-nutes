/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 *
 * @author caiogomes
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
        value={"createdAt", "updatedAt"},
        allowGetters=true
)
public abstract class AuditModel implements Serializable {
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_at", nullable=false, updatable=false)
    @CreatedDate
    private Date createdAt;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_at", nullable=false)
    @LastModifiedDate
    private Date updatedAt;
    
    public Date getCreatedAt() {
        return this.createdAt;
    }
    
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    
    public Date getUpdatedAt() {
        return this.updatedAt;
    }
    
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}