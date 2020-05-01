/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author caiogomes
 */

@Repository
public interface NutesUserRepository extends JpaRepository<NutesUser, Long> {
    List<NutesUser> findByName(String name);
    List<NutesUser> findByUsername(String username);
}
