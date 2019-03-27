package com.deloitte.nextgen.service;

import java.util.List;

import com.deloitte.nextgen.model.User;
import com.deloitte.nextgen.model.UserDto;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}
