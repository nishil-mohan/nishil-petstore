package com.nishil.pet.todo.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nishil.pet.todo.entity.Todo;
import com.nishil.pet.todo.service.TodoService;


/**
 * 
 * @author nishil85
 * REST layer for ToDo CRUD operations.

 */
@RestController
@RequestMapping("/todo")
public class TodoController {



	@Autowired
	TodoService toDoService;

	/**
	 * Retrieve All Todos List
	 * TODO - Add pagination support
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/list/{account}", method= RequestMethod.GET)
	public ResponseEntity list(@PathVariable String account,Model model){
		if(StringUtils.isBlank(account)) {
			return new ResponseEntity("Invalid Request", HttpStatus.BAD_REQUEST);
		}
		List<Todo> todoList = toDoService.listAllTodo( account);
		return new ResponseEntity<List<Todo>>(todoList, HttpStatus.OK);
	}
	
	/**
	 * List todos by status ->completed or pending
	 * 
	 * @param account
	 * @param completed
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/list/{account}/{completed}", method= RequestMethod.GET)
	public ResponseEntity listByStatus(@PathVariable String account,@PathVariable boolean completed,Model model){
		if(StringUtils.isBlank(account)) {
			return new ResponseEntity("Invalid Request", HttpStatus.BAD_REQUEST);
		}
		List<Todo> todoList = toDoService.listTodoByStatus(account, completed);
		return new ResponseEntity<List<Todo>>(todoList, HttpStatus.OK);
	}

	 
	/**
	 * Save Todo
	 * @param Todo
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity saveTodo(@RequestBody Todo todo){
		Todo todoSaved=toDoService.save(todo);
		if(todoSaved!=null) {
			return new ResponseEntity<Todo>(todoSaved, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Save Failed", HttpStatus.EXPECTATION_FAILED);
		}
	}

	 
	/**
	 * Update Todo Detail as marked
	 * @param id
	 * @param Todo
	 * @return
	 */
	@RequestMapping(value = "/mark/{id}", method = RequestMethod.POST)
	public ResponseEntity<Todo> markAsComplete(@PathVariable String id, @RequestBody Todo Todo){
		Todo emp=toDoService.markAsComplete(id);
		return new ResponseEntity<Todo>(emp, HttpStatus.OK);
	}


	/**
	 * Delete Todo Details
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/delete/{id}", method = RequestMethod.POST)
	public ResponseEntity<Todo> delete(@PathVariable String id){
		toDoService.delete(id);
		Todo deletedTodo=new Todo();
		deletedTodo.setId(id);
		return new ResponseEntity<Todo>(deletedTodo, HttpStatus.OK);

	}
}
