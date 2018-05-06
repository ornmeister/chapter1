import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todoList:any;

  constructor(public storage:Storage) {
    console.log('Hello TodoProvider Provider');
    this.todoList=[];
  }
  save($key,$value){
    this.storage.set($key,$value);
  }
  delete($key){
    this.storage.remove($key);
  }
  getTodoList(){
    this.todoList=[];
    this.storage.forEach((value,key,index)=>{
      this.todoList.push({'key':key,'value':value})
    });
    return this.todoList;
  }
}
