import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Validators,FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public id:any=0;
  private data:any;
  private todoList:any[];

  constructor(public navCtrl: NavController, private storage:Storage,
    private todoService:TodoProvider, private formBuilder:FormBuilder) {
      this.data=formBuilder.group({
        todo:['',Validators.required],
      });
      this.todoList = this.todoService.getTodoList();
  }
saveData(){
  this.id++;
  this.todoService.save(this.id+"",this.data.value.todo);
  this.todoList = this.todoService.getTodoList();
}
delete(item){
  this.todoService.delete(item.key);
  this.todoList = this.todoService.getTodoList();
}
}
