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

import java.util.Date;

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

        return new JwtResponse(token, jwtRequest.getUsername());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody User user) {

        if (userService.findUserByUsername(user.getUsername())) {
            return new ResponseEntity<>("Username has already exists", HttpStatus.NOT_ACCEPTABLE);
        }

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setCreatedAt(new Date());
        User newUser = userService.save(user);

        return new ResponseEntity<>("User is created successfully", HttpStatus.CREATED);
    }

    @RequestMapping(value = {"/{username}"}, method = RequestMethod.PUT)
    public ResponseEntity<Object> changePassword(@PathVariable String username, @RequestBody JwtRequest jwtRequest) {
        String pwd = bCryptPasswordEncoder.encode(jwtRequest.getPassword());
        User user = userService.changePassword(username, pwd);
        return new ResponseEntity<>("Password changed successfully", HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Object> getByUsername(@RequestParam(value = "username", defaultValue = "") String username) {
        User user = userService.findByUsername(username);
        if (user == null) {
            return new ResponseEntity<>("Could not find user have username = " + username, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
