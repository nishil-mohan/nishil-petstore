package com.nishil.pet.todo.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nishil.pet.todo.entity.Todo;
import com.nishil.pet.todo.repository.ToDoRepository;

@Service
public class TodoService {

	
	@Autowired
	ToDoRepository doRepository;

	/**
	 * List all Todos for the requested account
	 * @param account
	 * @return
	 */
	@Transactional
	public List<Todo> listAllTodo(String account) {
		List<Todo> toDoList = doRepository.findByUserName(account);
		return toDoList;
	}
	
	@Transactional
	/**
	 * Lists either completed or pending todos for an account holder
	 * @param account
	 * @param isCompleted
	 * @return
	 */
	public List<Todo> listTodoByStatus(String account,boolean isCompleted) {
		List<Todo> toDoList = doRepository.findByUserNameAndCompleted(account, isCompleted);
		return toDoList;
	}


	/**
	 * Creates todo. 
	 * TODO Exception management
	 * @param todo
	 * @return
	 */
	@Transactional
	public Todo save(Todo todo) {
		Todo toDoSaved = null;
		if(isValid(todo)) {
			todo.setId(null);
			 toDoSaved = doRepository.save(todo);
		}
		return toDoSaved;
	}
	
	
	/**
	 * Marks Todo as complete
	 * @param  Id
	 * @return
	 */
	@Transactional
	public Todo markAsComplete(String id) {
		Todo toDoToUpdate  = doRepository.findOne(id)	;
	    toDoToUpdate = doRepository.findOne(id)	;
	    if(toDoToUpdate!=null) {
	    	toDoToUpdate.setCompleted(true);
	    	return doRepository.save(toDoToUpdate);
	    }
	    return null;
	}

	/**
	 * Deletes Todo details
	 * 
	 * @param id
	 */
	public void delete(String id) {
		doRepository.delete(id);
		
	}
	
	/**
	 * Validates Todo entity
	 * @param toDoSaved
	 * @return
	 */
	private boolean isValid(Todo todo) {
		if(todo!=null && StringUtils.isNotBlank(todo.getDescription())&& StringUtils.isNotBlank(todo.getUserName()) ) {
			return true;
		}
		return false;
	}

}
