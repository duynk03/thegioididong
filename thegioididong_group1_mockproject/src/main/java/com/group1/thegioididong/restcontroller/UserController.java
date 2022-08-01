package com.group1.thegioididong.restcontroller;

import com.group1.thegioididong.entity.User;
import com.group1.thegioididong.model.JwtRequest;
import com.group1.thegioididong.model.JwtResponse;
import com.group1.thegioididong.service.UserService;
import com.group1.thegioididong.utility.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    jwtRequest.getUsername(),
                    jwtRequest.getPassword()
            ));
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        final UserDetails userDetails = userService.loadUserByUsername(jwtRequest.getUsername());

        final String token = jwtUtil.generateToken(userDetails);

        return new JwtResponse(token);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody User user) {

        if (userService.findUserByUsername(user.getUsername())) {
            return new ResponseEntity<>("Username has already exists", HttpStatus.NOT_ACCEPTABLE);
        }

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        User newUser = userService.save(user);

        return new ResponseEntity<>("User is created successfully", HttpStatus.CREATED);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.PUT)
    public ResponseEntity<Object> changePassword(@PathVariable Long id, @RequestBody JwtRequest jwtRequest) {
        String pwd = bCryptPasswordEncoder.encode(jwtRequest.getPassword());
        User user = userService.changePassword(id, pwd);
        return new ResponseEntity<>("Password changed successfully", HttpStatus.CREATED);
    }
}
