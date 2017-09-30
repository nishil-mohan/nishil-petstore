package com.nishil.pet.todo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.nishil.pet.todo.entity.Todo;

public interface ToDoRepository extends CrudRepository<Todo, String>   {
    @Override
    Todo findOne(String id);
    
    List<Todo> findByUserName(String userName);
    
    List<Todo> findByUserNameAndCompleted(String userName,boolean isCompleted);

    @Override
    void delete(Todo deleted);
}