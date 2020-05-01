/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author caiogomes
 */
@RestController
public class UsersController {
    @Autowired
    private NutesUserRepository userRepository;
    
    @GetMapping("/api/users")
    public List<NutesUser> getUsers() {
        return this.userRepository.findAll();
    }
    
    @PostMapping("api/users")
    public NutesUser createUser(@Valid @RequestBody NutesUser user) {
        return this.userRepository.save(user);
    }
    
    @PutMapping("api/users/{userId}")
    public NutesUser updateUser(@PathVariable Long userId, 
            @Valid @RequestBody NutesUser userRequest) {
        this.userRepository.findById(userId)
                .map(user -> {
                    user.setFatherName(userRequest.getFatherName());
                    user.setMotherName(userRequest.getMotherName());
                    user.setName(userRequest.getName());
                    user.setUsername(userRequest.getUsername());
                    return this.userRepository.save(user);
                }).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        return userRequest;
    }
    
    
    @DeleteMapping("api/users/{userId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable Long userId) {
        return this.userRepository.findById(userId)
                .map(user -> {
                   this.userRepository.delete(user);
                   return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}
