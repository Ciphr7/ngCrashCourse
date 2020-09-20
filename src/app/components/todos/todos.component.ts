import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor( private ts:TodoService) { }

  ngOnInit() {

     this.ts.getTodos().subscribe(todos =>{
       this.todos = todos;
     });

  }
  deleteTodo(todo:Todo){
    //Remove from UI
    this.todos= this.todos.filter(t => t.id !== todo.id);
    //Remove from server
    this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.ts.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });

  }

}
